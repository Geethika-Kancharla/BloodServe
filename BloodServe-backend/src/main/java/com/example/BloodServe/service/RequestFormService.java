package com.example.BloodServe.service;

import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.repositories.RequestFormRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface RequestFormService {

    RequestForm submitRequestForm(RequestForm requestForm) ;

    List<RequestForm> getAllRequestForms();

    void sendEmailToMatchingDonors(String bloodGroup, String subject, String text);

}
