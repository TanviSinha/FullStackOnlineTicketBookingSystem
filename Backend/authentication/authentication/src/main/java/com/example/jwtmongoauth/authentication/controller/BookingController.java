//package com.example.jwtmongoauth.authentication.controller;
////import com.example.jwtmongoauth.authentication.dto.BookingRequest;
////import com.example.jwtmongoauth.authentication.service.BookingService;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.*;
////
////import java.util.List;
////
////@RestController
////@RequestMapping("/api/bookings")
////public class BookingController {
////    private final BookingService bookingService;
////
////    public BookingController(BookingService bookingService) {
////        this.bookingService = bookingService;
////    }
////
////    @PostMapping("/book")
////    public ResponseEntity<?> bookSeats(@RequestBody BookingRequest bookingRequest) {
////        try {
////            var booking = bookingService.bookSeats(
////                    bookingRequest.getEmail(),
////                    bookingRequest.getMovieId(),
////                    bookingRequest.getCinemaHallId(),
////                    bookingRequest.getTimeSlot(),
////                    bookingRequest.getSeats()
////            );
////            return ResponseEntity.status(201).body(booking);
////        } catch (Exception e) {
////            return ResponseEntity.badRequest().body(e.getMessage());
////        }
////    }
////
////    @GetMapping("/booked-seats")
////    public ResponseEntity<List<String>> getBookedSeats(
////            @RequestParam String cinemaHallId,
////            @RequestParam String movieId,
////            @RequestParam String timeSlot
////    ) {
////        try {
////            List<String> bookedSeats = bookingService.getBookedSeats(cinemaHallId, movieId, timeSlot);
////            return ResponseEntity.ok(bookedSeats);
////        } catch (Exception e) {
////            return ResponseEntity.badRequest().body(null);
////        }
////    }
////}
//
////
package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.dto.BookingRequest;
import com.example.jwtmongoauth.authentication.model.Booking;
import com.example.jwtmongoauth.authentication.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/book")
    public ResponseEntity<Booking> bookSeats(@RequestBody BookingRequest bookingRequest) {
        try {
            Booking booking = bookingService.bookSeats(
                    bookingRequest.getEmail(),
                    bookingRequest.getMovieId(),
                    bookingRequest.getCinemaHallId(),
                    bookingRequest.getTimeSlot(),
                    bookingRequest.getSeats()
            );
            return ResponseEntity.status(201).body(booking);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/booked-seats")
    public ResponseEntity<List<String>> getBookedSeats(
            @RequestParam String cinemaHallId,
            @RequestParam String movieId,
            @RequestParam String timeSlot
    ) {
        try {
            List<String> bookedSeats = bookingService.getBookedSeats(cinemaHallId, movieId, timeSlot);
            return ResponseEntity.ok(bookedSeats);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}


