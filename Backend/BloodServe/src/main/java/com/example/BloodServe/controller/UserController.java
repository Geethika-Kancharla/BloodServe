package com.example.BloodServe.controller;

import java.security.Principal;
import java.util.List;

import com.example.BloodServe.dto.LoginRequest;
import com.example.BloodServe.dto.LoginResponse;
import com.example.BloodServe.dto.RegistrationResponse;
import com.example.BloodServe.model.User;
import com.example.BloodServe.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.BloodServe.dto.UserDto;
import com.example.BloodServe.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;


    @Autowired
    UserRepository userRepository;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        // Authenticate the user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Get the user details from the authentication object
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        // Return the user role
        return ResponseEntity.ok(new LoginResponse(userDetails.getAuthorities().iterator().next().getAuthority()));
    }

    @GetMapping("/role")
    public ResponseEntity<?> getUserRole() {
        // Get the current authenticated user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).body("Unauthorized");
        }

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(new LoginResponse(userDetails.getAuthorities().iterator().next().getAuthority()));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out successfully");
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


    @RequestMapping("/delete/{id}")
    public String deleteDonor(@PathVariable(name = "id") long id) {
        userService.delete(id);
        return "redirect:/";
    }
    
}