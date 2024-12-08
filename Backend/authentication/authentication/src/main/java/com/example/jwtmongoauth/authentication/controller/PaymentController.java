package com.example.jwtmongoauth.authentication.controller;


import com.example.jwtmongoauth.authentication.model.Booking;
import com.example.jwtmongoauth.authentication.service.BookingService;

import com.example.jwtmongoauth.authentication.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    private final BookingService bookingService;
    private final EmailService emailService;

    public PaymentController(BookingService bookingService, EmailService emailService) {
        this.bookingService = bookingService;
        this.emailService = emailService;
    }

    @PostMapping("/process")
    public ResponseEntity<?> processPayment(@RequestBody Booking booking) {
        try {
            // Save the booking to the database

            // Send confirmation email
            emailService.sendBookingConfirmation(booking);

            return ResponseEntity.ok("Payment successful, booking confirmed.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Payment processing failed. " + e.getMessage());
        }
    }
}
