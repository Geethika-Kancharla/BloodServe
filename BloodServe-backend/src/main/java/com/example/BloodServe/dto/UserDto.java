package com.example.BloodServe.dto;



import jakarta.validation.constraints.*;

public class UserDto {

    private Long id;

    @Email
    private String email;

    @NotNull
    private String password;
    private String role;

    @NotNull
    private String fullname;

    @NotNull
    private String gender;

    private String age;
    private String bloodgroup;


    @NotNull
    private String address;

    private String phonenumber;

    public UserDto(Long id, String email, String password, String role, String fullname, String gender, String age, String bloodgroup, String address, String phonenumber) {

        super();
        this.id=id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.fullname = fullname;
        this.gender = gender;
        this.age=age;
        this.bloodgroup = bloodgroup;
        this.address = address;
        this.phonenumber= phonenumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }


    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
