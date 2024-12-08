package com.example.jwtmongoauth.authentication.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "ticket_bookings")
public class TicketBooking {
    @Id
    private String id;
    private String email;
    private String hallId;
    private String movieId;
    private LocalDateTime timeSlot;
    private List<String> seatNumbers;
    private LocalDateTime bookingDate;
    private boolean isCancelled;
}
