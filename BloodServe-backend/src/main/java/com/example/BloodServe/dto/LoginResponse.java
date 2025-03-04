package com.example.BloodServe.dto;


public class LoginResponse {
    private String role;

    private Long id;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LoginResponse() {
    }

    public LoginResponse(String role, Long id) {
        this.role = role;
        this.id = id;
    }
}
