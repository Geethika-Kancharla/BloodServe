package com.example.BloodServe.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.BloodServe.dto.UserDto;
import com.example.BloodServe.model.User;
import com.example.BloodServe.repositories.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;


    @Override
    public User save(UserDto userDto) {
        User user = new User(userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()) , userDto.getRole(), userDto.getFullname(),userDto.getGender(),userDto.getAge(),userDto.getBloodgroup(),userDto.getAddress(),userDto.getPhonenumber());
        return userRepository.save(user);
    }

    public void delete(long id) {
        userRepository.deleteById(id);
    }

    public void saveDonor(User user) {
        userRepository.save(user);
    }

    public User getDonorById(long id)
    {
        Optional<User> user=userRepository.findById(id);
        if(user.isPresent())
        {
            return user.get();
        }
        return null;
    }

    @Override
    public List<UserDto> getAll() {
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> new UserDto(
                user.getId(),

                user.getEmail(),
                user.getPassword(),
                user.getRole(),
                user.getFullname(),
                user.getGender(),
                user.getAge(),
                user.getBloodgroup(),
                user.getAddress(),
                user.getPhonenumber()
        )).collect(Collectors.toList());
    }

    public User updateUser(Long id, UserDto userDto) {
        User user = getDonorById(id);
        if (user != null) {
            user.setFullname(userDto.getFullname());
            user.setEmail(userDto.getEmail()); // Allow updating email
            user.setPassword(userDto.getPassword());
            user.setGender(userDto.getGender());
            user.setPhonenumber(userDto.getPhonenumber());
            user.setAge(userDto.getAge());
            user.setBloodgroup(userDto.getBloodgroup());
            user.setAddress(userDto.getAddress());

            return userRepository.save(user);
        }
        return null;
    }

    public Page<UserDto> getUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> usersPage = userRepository.findAll(pageable);

        // Convert User entities to UserDto
        return usersPage.map(user -> new UserDto(
                user.getId(), user.getEmail(), user.getPassword(), user.getRole(),
                user.getFullname(), user.getGender(), user.getAge(),
                user.getBloodgroup(), user.getAddress(), user.getPhonenumber()));
    }

    @Override
    public Map<String, Long> getAllBloodGroupCounts() {
        Map<String, Long> bloodGroupCounts = new HashMap<>();

        // Fetch count for each blood group
        bloodGroupCounts.put("A+", userRepository.countByBloodgroup("A+"));
        bloodGroupCounts.put("B+", userRepository.countByBloodgroup("B+"));
        bloodGroupCounts.put("AB+", userRepository.countByBloodgroup("AB+"));
        bloodGroupCounts.put("O+", userRepository.countByBloodgroup("O+"));
        bloodGroupCounts.put("A-", userRepository.countByBloodgroup("A-"));
        bloodGroupCounts.put("B-", userRepository.countByBloodgroup("B-"));
        bloodGroupCounts.put("AB-", userRepository.countByBloodgroup("AB-"));
        bloodGroupCounts.put("O-", userRepository.countByBloodgroup("O-"));

        return bloodGroupCounts;
    }

    @Override
    public long getAllCount() {
            return userRepository.countDonors();

    }


    }
