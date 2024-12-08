package com.example.jwtmongoauth.authentication.repository;
import com.example.jwtmongoauth.authentication.model.SeatBooking;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface SeatBookingRepository extends MongoRepository<SeatBooking, String> {
    List<SeatBooking> findByCinemaHallIdAndMovieIdAndShowTime(String cinemaHallId, String movieId, String showTime);
}
