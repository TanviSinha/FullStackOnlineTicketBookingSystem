//package com.example.jwtmongoauth.authentication.service;
//import com.example.jwtmongoauth.authentication.model.CinemaHall;
//import com.example.jwtmongoauth.authentication.repository.CinemaRepository;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//@Service
//public class CinemaService {
//
////    @Autowired
////    private CinemaRepository cinemaRepository;
////
////    public List<CinemaHall> getCinemasByMovieId(String movieId) {
////        return cinemaRepository.findByMovieId(movieId);
////    }
////
//    public CinemaHall addCinema(CinemaHall cinema) {
//        return cinemaRepository.save(cinema); // Add a new cinema
//    }
//private static final Logger logger = LoggerFactory.getLogger(CinemaService.class);
//
//    @Autowired
//    private CinemaRepository cinemaRepository;
//
//    public List<CinemaHall> getCinemasByMovieId(String movieId) {
//        logger.info("Fetching cinemas for movieId: {}", movieId);
//        List<CinemaHall> cinemas = cinemaRepository.findByMovieId(movieId);
//        logger.info("Cinemas found: {}", cinemas);
//        return cinemas;
//    }
//
//    public CinemaHall addCinema(CinemaHall cinema) {
//        logger.info("Adding new cinema: {}", cinema);
//        return cinemaRepository.save(cinema);
//    }
//}
package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.model.CinemaHall;
import com.example.jwtmongoauth.authentication.repository.CinemaHallRepository;
//import com.example.jwtmongoauth.authentication.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
//
//@Service
//public class CinemaService {
//
//    @Autowired
//    private CinemaRepository cinemaRepository;
//
//    // Fetch cinemas by movie ID
//    public List<CinemaHall> getCinemasByMovieId(String movieId) {
//        return cinemaRepository.findByMovieId(movieId);  // Fetch cinemas for a given movieId
//    }
////    public List<CinemaHall> getCinemasByMovieId(ObjectId movieId) {
////        return cinemaRepository.findByMovieId(movieId);
////    }
//    // Add a new cinema hall
//    public CinemaHall addCinema(CinemaHall cinema) {
//        return cinemaRepository.save(cinema); // Add a new cinema
//    }
//}


@Service
public class CinemaHallService {
    private final CinemaHallRepository cinemaHallRepository;

    public CinemaHallService(CinemaHallRepository cinemaHallRepository) {
        this.cinemaHallRepository = cinemaHallRepository;
    }

    public List<CinemaHall> getCinemaHallsByMovieId(String movieId) {
        return cinemaHallRepository.findByMovieId(movieId);
    }
        public CinemaHall addCinema(CinemaHall cinema) {
        return cinemaHallRepository.save(cinema); // Add a new cinema
    }
 }//



