package com.example.BloodServe.controller;

import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.model.User;
import com.example.BloodServe.service.EmailService;
import com.example.BloodServe.service.RequestFormService;
import com.example.BloodServe.service.UserService;
import jakarta.validation.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class RequestFormController {

    @Autowired
    private RequestFormService requestFormService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @PostMapping("request-forms/{userId}")
    public ResponseEntity<RequestForm> submitRequestForm(@PathVariable Long userId, @RequestBody RequestForm requestForm) {
        // Fetch the user by ID
        User user = userService.getDonorById(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Return 404 if user not found
        }

        // Link the request form to the fetched user
        requestForm.setUser(user);

        // Process the request form
        RequestForm submittedForm = requestFormService.submitRequestForm(requestForm);

        // Return the response with status code 201 (Created) and the submitted form
        return new ResponseEntity<>(submittedForm, HttpStatus.CREATED);
    }

    @GetMapping("/requests")
    public ResponseEntity<List<RequestForm>> getAllRequestForms() {
        // Fetch all request forms
        List<RequestForm> requestForms = requestFormService.getAllRequestForms();

        // Return the response with status code 200 (OK) and the list of request forms
        return ResponseEntity.ok(requestForms);
    }

    @RequestMapping("/he")
    public String homePage() {
        emailService.sendEmail("geethikak004@gmail.com", "Welcome George", "Sample Message here");
        return "Sent";
    }



}
