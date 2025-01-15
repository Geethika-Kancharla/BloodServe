package com.example.BloodServe.controller;

import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.model.User;
import com.example.BloodServe.service.RequestFormService;
import com.example.BloodServe.service.UserService;
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


    @PostMapping("request-forms/{userId}")
    public ResponseEntity<RequestForm> submitRequestForm(@PathVariable Long userId, @RequestBody RequestForm requestForm) {
        
        User user = userService.getDonorById(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  
        }

        requestForm.setUser(user);

        RequestForm submittedForm = requestFormService.submitRequestForm(requestForm);

        
        return new ResponseEntity<>(submittedForm, HttpStatus.CREATED);
    }

    @GetMapping("/requests")
    public ResponseEntity<List<RequestForm>> getAllRequestForms() {
    
        List<RequestForm> requestForms = requestFormService.getAllRequestForms();

        return ResponseEntity.ok(requestForms);
    }

    @PostMapping("/send-matching-donors")
    public ResponseEntity<String> sendEmailToMatchingDonors(
            @RequestParam String bloodGroup,
            @RequestParam String subject,
            @RequestParam String text) {
        try {
            requestFormService.sendEmailToMatchingDonors(bloodGroup, subject, text);
            return ResponseEntity.ok("Emails sent successfully to matching donors");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error sending emails: " + e.getMessage());
        }
    }

}
