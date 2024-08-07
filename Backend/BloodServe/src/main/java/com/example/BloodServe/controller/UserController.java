package com.example.BloodServe.controller;

import java.security.Principal;

import com.example.BloodServe.model.User;
import com.example.BloodServe.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.BloodServe.dto.UserDto;
import com.example.BloodServe.service.UserService;


@Controller
@CrossOrigin
public class UserController {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;


    @Autowired
    UserRepository userRepository;


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

    @RequestMapping("/delete/{id}")
    public String deleteDonor(@PathVariable(name = "id") long id) {
        userService.delete(id);
        return "redirect:/";
    }
    
}