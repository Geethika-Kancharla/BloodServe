package com.example.BloodServe.service;

import com.example.BloodServe.model.RequestForm;
import com.example.BloodServe.repositories.RequestFormRepository;
import org.springframework.beans.factory.annotation.Autowired;

public interface RequestFormService {



    RequestForm submitRequestForm(RequestForm requestForm) ;


}
