package com.example.BloodServe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BloodServe.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    @Query(value = "SELECT * FROM users WHERE bloodgroup ILIKE :keyword", nativeQuery = true)
    public List<User> findByKeyword(@Param("keyword") String keyword);

    @Query(value = "SELECT COUNT(*) FROM users WHERE bloodgroup = :bloodGroup", nativeQuery = true)
    long countByBloodgroup(@Param("bloodGroup") String bloodGroup);

    @Query(value = "SELECT COUNT(*) FROM users", nativeQuery = true)
    long countDonors();

    List<User> findByBloodgroup(String bloodgroup);
}