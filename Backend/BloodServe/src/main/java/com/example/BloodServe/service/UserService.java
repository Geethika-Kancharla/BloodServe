package com.example.BloodServe.service;

import com.example.BloodServe.dto.UserDto;
import com.example.BloodServe.model.User;
import com.example.BloodServe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import java.util.List;

public interface UserService {

    User save (UserDto userDto);

    public void delete(long id);

    public void saveDonor(User user);

    public User getDonorById(long id);

    List<UserDto> getAll();

    User updateUser(Long id, UserDto userDto);

    public Page<UserDto> getUsers(int page, int size);


}