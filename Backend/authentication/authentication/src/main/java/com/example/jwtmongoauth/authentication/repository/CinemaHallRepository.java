//package com.example.jwtmongoauth.authentication.repository;
//import com.example.jwtmongoauth.authentication.model.CinemaHall;
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//import java.util.List;
//
//public interface CinemaRepository extends MongoRepository<CinemaHall, String> {
//    List<CinemaHall> findByMovieId(String movieId);  // Custom query to find cinemas showing a specific movie
//}
package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.model.CinemaHall;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
//
//import java.util.List;
//
//@Repository
//public interface CinemaRepository extends MongoRepository<CinemaHall, String> {
//    List<CinemaHall> findByMovieId(String movieId);  // Custom query to find cinemas showing a specific movie
//}
@Repository
public interface CinemaHallRepository extends MongoRepository<CinemaHall, String> {
    List<CinemaHall> findByMovieId(String movieId);
}

//@Repository
//public interface CinemaHallRepository extends MongoRepository<CinemaHall, String> {
//    List<CinemaHall> findByMovieId(String movieId);
//    CinemaHall findByName(String name);
//}
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import java.util.Optional;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import java.util.Optional;
//
//public interface CinemaHallRepository extends MongoRepository<CinemaHall, String> {
//    Optional<CinemaHall> findById(String id); // Return Optional
//}



//public interface CinemaHallRepository extends MongoRepository<CinemaHall, String> {}

