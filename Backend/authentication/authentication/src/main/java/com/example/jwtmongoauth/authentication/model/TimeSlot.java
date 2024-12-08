package com.example.jwtmongoauth.authentication.model;

public class TimeSlot {
    private String time; // e.g., "01:00 PM", "03:00 PM"
    private int availableSeats;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    // Getters and Setters
}
