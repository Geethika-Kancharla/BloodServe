package com.example.BloodServe.service;

import com.example.BloodServe.repositories.RequestFormRepository;
import com.example.BloodServe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.BloodServe.model.RequestForm;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RequestFormServiceImpl implements RequestFormService{

    @Autowired
    private RequestFormRepository requestFormRepository;


    @Autowired
    private UserRepository userRepository;

    public RequestForm submitRequestForm(RequestForm requestForm) {
        return requestFormRepository.save(requestForm);
    }

    public List<RequestForm> getAllRequestForms() {
        return requestFormRepository.findAll();
    }




}
