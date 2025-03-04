package com.example.BloodServe.service;

import com.example.BloodServe.repositories.RequestFormRepository;
import com.example.BloodServe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.model.User;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestFormServiceImpl implements RequestFormService {

    @Autowired
    private RequestFormRepository requestFormRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    public RequestForm submitRequestForm(RequestForm requestForm) {
        return requestFormRepository.save(requestForm);
    }

    public List<RequestForm> getAllRequestForms() {
        return requestFormRepository.findAll();
    }

    public void sendEmailToMatchingDonors(String bloodGroup, String subject, String text) {
        List<User> matchingDonors = userRepository.findByBloodgroup(bloodGroup);
        
        for (User donor : matchingDonors) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(donor.getEmail());
            message.setSubject(subject);
            
           
            String personalizedText = "Dear " + donor.getFullname() + ",\n\n" 
                + text + "\n\nBlood Group Needed: " + bloodGroup 
                + "\n\nThank you for your support,"
                + "\nBloodServe Team";
            
            message.setText(personalizedText);
            
            try {
                mailSender.send(message);
            } catch (Exception e) {
               
                System.err.println("Failed to send email to " + donor.getEmail() + ": " + e.getMessage());
            }
        }
    }
}
