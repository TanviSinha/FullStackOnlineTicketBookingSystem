package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.model.Booking;
import com.example.jwtmongoauth.authentication.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // Book seats for a user
    public Booking bookSeats(String email, String movieId, String cinemaHallId, String timeSlot, List<String> seats) {
        // Validate that the requested seats are not already booked
        List<String> alreadyBookedSeats = getBookedSeats(cinemaHallId, movieId, timeSlot);

        for (String seat : seats) {
            if (alreadyBookedSeats.contains(seat)) {
                throw new IllegalArgumentException("Seat " + seat + " is already booked.");
            }
        }

        // Create a new booking
        Booking booking = new Booking();
        booking.setEmail(email);
        booking.setMovieId(movieId);
        booking.setCinemaHallId(cinemaHallId);
        booking.setTimeSlot(timeSlot);
        booking.setSeats(seats);

        // Save the booking in the database
        return bookingRepository.save(booking);
    }

    // Get the list of already booked seats for a specific cinema hall, movie, and time slot
    public List<String> getBookedSeats(String cinemaHallId, String movieId, String timeSlot) {
        // Fetch all bookings for the given cinema hall, movie, and time slot
        List<Booking> bookings = bookingRepository.findByCinemaHallIdAndMovieIdAndTimeSlot(cinemaHallId, movieId, timeSlot);

        // Aggregate all booked seats
        List<String> bookedSeats = new ArrayList<>();
        for (Booking booking : bookings) {
            bookedSeats.addAll(booking.getSeats());
        }

        return bookedSeats;
    }


}
