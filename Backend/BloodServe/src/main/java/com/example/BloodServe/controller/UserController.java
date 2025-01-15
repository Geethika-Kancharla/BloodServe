package com.example.BloodServe.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.BloodServe.dto.*;
import com.example.BloodServe.model.User;
import com.example.BloodServe.repositories.UserRepository;
import com.example.BloodServe.service.CustomUserDetail;
import com.example.BloodServe.service.CustomUserDetailsService;
import com.example.BloodServe.service.RequestFormService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.BloodServe.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;


    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomUserDetailsService customUserDetailsService;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RequestFormService requestFormService;


//Actual post request for login
@PostMapping("/get-role")
public ResponseEntity<?> getUserRole(@Valid @RequestBody LoginRequest loginRequest) {
    // Retrieve the user details
    CustomUserDetail userDetails = (CustomUserDetail) customUserDetailsService.loadUserByUsername(loginRequest.getEmail());

    // Check if the provided password matches the stored password
    if (passwordEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())) {
        // Extract the user and role
        User user = userDetails.getUser();
        String role = userDetails.getAuthorities().iterator().next().getAuthority();

        // Return the role and user ID in the response
        return ResponseEntity.ok(new LoginResponse(role,user.getId()));
    } else {
        // Return an error response if authentication fails
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out successfully");
    }


    @GetMapping("/getById/{id}")
    public ResponseEntity<UserDto> getDonorById(@PathVariable("id") Long donorId) {
        User user = userService.getDonorById(donorId);

        // Convert the User entity to a UserDto
        UserDto userDto = new UserDto(
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
        );

        return ResponseEntity.ok(userDto);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateDonorById(
            @PathVariable("id") Long donorId,
            @RequestBody UserDto updatedUserDto) {

        User updatedUser = userService.updateUser(donorId, updatedUserDto);

        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok("Edited");
    }


    @GetMapping("/index")
    public String home() {
        return "index";
    }

    @GetMapping("/registration")
    public String getRegistrationPage(@ModelAttribute("user") UserDto userDto) {
        return "register";
    }


    @PostMapping("/registration")
    public String saveUser(@Valid @ModelAttribute("user") UserDto userDto, Model model) {

        userService.save(userDto);
        model.addAttribute("message", "Registered Successfuly!");
        return "login";
    }

    @GetMapping("/users")
    public ResponseEntity<Page<UserDto>> getUsers(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "3") int size) {
        Page<UserDto> usersPage = userService.getUsers(page, size);
        return ResponseEntity.ok(usersPage);
    }


    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@Valid @RequestBody UserDto userDto) {
        userService.save(userDto);
        return ResponseEntity.ok(new RegistrationResponse("Registered Successfully!"));
    }


    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("user-page")
    public String userPage (Model model,Principal principal) {//
 UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
        model.addAttribute("user", userDetails);
        return "user";
             /*  List<User> listOfUsers = userRepository.findAll();
        model.addAttribute("user",listOfUsers);
        return "user"; */
    }

    @GetMapping("admin-page")
    public String adminPage (Model model,String keyword) {
      /* List<User> listOfUsers = userRepository.findAll();
        model.addAttribute("user",listOfUsers);
        return "admin";*/
        if(keyword != null)
        {
            model.addAttribute("user",userRepository.findByKeyword(keyword));
        }
        else {
            model.addAttribute("user", userRepository.findAll());
        }
        return "admin";
    }

    @GetMapping("/")
    public String admin (Model model,String keyword) {
      /* List<User> listOfUsers = userRepository.findAll();
        model.addAttribute("user",listOfUsers);
        return "admin";*/
        if(keyword != null)
        {
            model.addAttribute("user",userRepository.findByKeyword(keyword));
        }
        else {
            model.addAttribute("user", userRepository.findAll());
        }
        return "admin";
    }


    @GetMapping("/new")
    public String add(Model model) {
        model.addAttribute("user", new User());
        return "new";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveDonor(@ModelAttribute("user") UserDto user) {
        userService.save(user);
        return "redirect:/";
    }


    @GetMapping("/get")
    public ResponseEntity<List<UserDto>> getAll() {
        List<UserDto> employees = userService.getAll();
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/get/{keyword}")
    public ResponseEntity<List<UserDto>> getByKeyword(@PathVariable("keyword") String keyword) {
        List<User> users;

        if (keyword != null) {
            users = userRepository.findByKeyword(keyword);
        } else {
            users = userRepository.findAll();
        }
        // Convert List<User> to List<UserDto>
        List<UserDto> userDtos = users.stream()
                .map(user -> new UserDto(
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
                ))
                .collect(Collectors.toList());

        return ResponseEntity.ok(userDtos);
    }

    @GetMapping("/countAll")
    public ResponseEntity<Map<String, Long>> getAllBloodGroupCounts() {
        Map<String, Long> bloodGroupCounts = userService.getAllBloodGroupCounts();
        return ResponseEntity.ok(bloodGroupCounts);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getAllCount() {
        long count = userService.getAllCount();
        return ResponseEntity.ok(count);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteDonor(@PathVariable(name = "id") long id) {
        userService.delete(id);

    }
    
}