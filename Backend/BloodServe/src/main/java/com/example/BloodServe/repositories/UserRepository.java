package com.example.BloodServe.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Query(value="SELECT COUNT(*) FROM users WHERE bloodgroup = ?1",nativeQuery = true)
    long countByBloodgroup(String bloodGroup);

    @Query(value="SELECT COUNT(*) FROM users",nativeQuery = true)
    long countDonors();


    @Query("SELECT email FROM users")
    List<String> findEmailsByBloodGroup();

}