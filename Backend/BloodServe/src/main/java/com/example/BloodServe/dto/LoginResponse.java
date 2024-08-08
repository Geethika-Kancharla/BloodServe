package com.example.BloodServe.dto;

public class LoginResponse {
    private String role;

    public LoginResponse(String role) {
        this.role = role;
    }

    // Getter
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
