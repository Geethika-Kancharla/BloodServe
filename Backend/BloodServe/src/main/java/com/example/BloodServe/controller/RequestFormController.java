package com.example.BloodServe.controller;

import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.model.User;
import com.example.BloodServe.service.RequestFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class RequestFormController {

    @Autowired
    private RequestFormService requestFormService;

    @PostMapping("request-forms/{userId}")
    public ResponseEntity<RequestForm> submitRequestForm(@PathVariable Long userId, @RequestBody RequestForm requestForm) {
        // Link the request form to the user
        User user = new User();  // Assuming you fetch the user by ID here
        user.setId(userId);
        requestForm.setUser(user);

        // Process the request form
        RequestForm submittedForm = requestFormService.submitRequestForm(requestForm);

        // Return the response with status code 201 (Created) and the submitted form
        return new ResponseEntity<>(submittedForm, HttpStatus.CREATED);
    }
}
