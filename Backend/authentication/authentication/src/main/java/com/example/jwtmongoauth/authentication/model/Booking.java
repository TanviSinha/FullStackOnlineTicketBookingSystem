package com.example.jwtmongoauth.authentication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

//@Document(collection = "bookings")
//public class Booking {
//    @Id
//    private String id;
//    private String userId; // ID of the user making the booking
//    private String cinemaHallId; // ID of the cinema hall
//    private String timeSlot; // Time slot for the booking
//    private List<String> bookedSeats; // List of seat numbers
//    private double totalPrice; // Total price for the booking
//
//    // Getters and Setters
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getUserId() {
//        return userId;
//    }
//
//    public void setUserId(String userId) {
//        this.userId = userId;
//    }
//
//    public String getCinemaHallId() {
//        return cinemaHallId;
//    }
//
//    public void setCinemaHallId(String cinemaHallId) {
//        this.cinemaHallId = cinemaHallId;
//    }
//
//    public String getTimeSlot() {
//        return timeSlot;
//    }
//
//    public void setTimeSlot(String timeSlot) {
//        this.timeSlot = timeSlot;
//    }
//
//    public List<String> getBookedSeats() {
//        return bookedSeats;
//    }
//
//    public void setBookedSeats(List<String> bookedSeats) {
//        this.bookedSeats = bookedSeats;
//    }
//
//    public double getTotalPrice() {
//        return totalPrice;
//    }
//
//    public void setTotalPrice(double totalPrice) {
//        this.totalPrice = totalPrice;
//    }
//}====================correct

//
//package com.example.jwtmongoauth.authentication.model;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Document(collection = "bookings")
//public class Booking {
//    @Id
//    private String id;
//    private String email;
//    private String hallId;
//    private LocalDateTime timeSlot;
//    private List<String> seats;
//    private LocalDateTime bookingDate;
//
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getHallId() {
//        return hallId;
//    }
//
//    public void setHallId(String hallId) {
//        this.hallId = hallId;
//    }
//
//    public LocalDateTime getTimeSlot() {
//        return timeSlot;
//    }
//
//    public void setTimeSlot(LocalDateTime timeSlot) {
//        this.timeSlot = timeSlot;
//    }
//
//    public List<String> getSeats() {
//        return seats;
//    }
//
//    public void setSeats(List<String> seats) {
//        this.seats = seats;
//    }
//
//    public LocalDateTime getBookingDate() {
//        return bookingDate;
//    }
//
//    public void setBookingDate(LocalDateTime bookingDate) {
//        this.bookingDate = bookingDate;
//    }
//
//    // Getters and Setters
//}

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private String email;          // Email of the user
    private String movieId;        // Movie ID
    private String cinemaHallId;   // Cinema Hall ID
    private String timeSlot;       // Time Slot
    private List<String> seats;    // List of booked seats
    private double totalPrice;     // Total price for the booked seats
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getCinemaHallId() {
        return cinemaHallId;
    }

    public void setCinemaHallId(String cinemaHallId) {
        this.cinemaHallId = cinemaHallId;
    }

    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public List<String> getSeats() {
        return seats;
    }

    public void setSeats(List<String> seats) {
        this.seats = seats;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }


    // Getters and setters
}
