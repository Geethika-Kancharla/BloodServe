package com.example.BloodServe.dto;

public class EmailRequest {
    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public EmailRequest(String subject, String text) {
        this.subject = subject;
        this.text = text;
    }

    public EmailRequest() {
    }

    private String subject;
    private String text;
}
