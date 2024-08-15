package com.example.BloodServe.service;

import com.example.BloodServe.repositories.RequestFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.BloodServe.model.RequestForm;
import org.springframework.stereotype.Service;


@Service
public class RequestFormServiceImpl implements RequestFormService{

    @Autowired
    private RequestFormRepository requestFormRepository;


    public RequestForm submitRequestForm(RequestForm requestForm) {
        return requestFormRepository.save(requestForm);
    }
}
