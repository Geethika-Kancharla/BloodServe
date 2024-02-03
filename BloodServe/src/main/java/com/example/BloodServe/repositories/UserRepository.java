package com.example.BloodServe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BloodServe.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail (String email);

    @Query(value="select * from users where users.bloodgroup like ?1 ",nativeQuery = true)
public List<User> findByKeyword(@Param("keyword") String keyword);

}