package com.example.BloodServe.repositories;

import com.example.BloodServe.model.RequestForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestFormRepository extends JpaRepository<RequestForm,Long> {
}
