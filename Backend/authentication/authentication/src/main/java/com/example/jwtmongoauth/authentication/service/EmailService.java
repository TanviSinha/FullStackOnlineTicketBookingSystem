package com.example.jwtmongoauth.authentication.service;


import com.example.jwtmongoauth.authentication.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendBookingConfirmation(Booking booking) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(booking.getEmail());
        message.setSubject("Booking Confirmation");
        message.setText("Dear Customer,\n\nYour booking has been confirmed:\n" +
                "Movie: " + booking.getMovieId() + "\n" +
                "Cinema Hall: " + booking.getCinemaHallId() + "\n" +
                "Seats: " + String.join(", ", booking.getSeats()) + "\n" +
                "Time Slot: " + booking.getTimeSlot() + "\n\nThank you for booking with us!");

        mailSender.send(message);
    }
}
