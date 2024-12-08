//package com.example.jwtmongoauth.authentication.repository;
////
////import com.example.jwtmongoauth.authentication.model.Booking;
////import org.springframework.data.mongodb.repository.MongoRepository;
////import org.springframework.stereotype.Repository;
////import java.util.List;
////public interface BookingRepository extends MongoRepository<Booking, String> {
////     List<Booking> findByCinemaHallIdAndMovieIdAndTimeSlot(String cinemaHallId, String movieId, String timeSlot);
////} thsi one is correct
//
//package com.example.jwtmongoauth.authentication.repository;
//
//import com.example.jwtmongoauth.authentication.model.Booking;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
//
//import java.util.List;
//
//public interface BookingRepository extends MongoRepository<Booking, String> {
//
//     // Find bookings by cinemaHallId, movieId, and timeSlot
//     List<Booking> findByCinemaHallIdAndMovieIdAndTimeSlot(String cinemaHallId, String movieId, String timeSlot);
//
//     // Check if specific seats are already booked for a given cinema hall, movie, and time slot
////     @Query("{ 'cinemaHallId': ?0, 'timeSlot': ?2, 'seats': { $in: ?3 } }")
////     boolean existsByCinemaHallIdAndTimeSlotAndSeatsIn(
////             String cinemaHallId, String timeSlot, List<String> seats
////     );
//}
///This is also working

package com.example.jwtmongoauth.authentication.repository;
import com.example.jwtmongoauth.authentication.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
     List<Booking> findByCinemaHallIdAndMovieIdAndTimeSlot(String cinemaHallId, String movieId, String timeSlot);
}