package com.example.jwtmongoauth.authentication.controller;
//import com.example.jwtmongoauth.authentication.model.CinemaHall;
//import com.example.jwtmongoauth.authentication.model.Movie;
//import com.example.jwtmongoauth.authentication.service.MovieService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
////@RestController
////@RequestMapping("/api/movies")
////public class MovieController {
////
////    @Autowired
////    private MovieService movieService;
////
////    @GetMapping
////    public List<Movie> getAllMovies() {
////        return movieService.getAllMovies();
////    }
////
////    @PostMapping
////    public Movie addMovie(@RequestBody Movie movie) {
////        return movieService.addMovie(movie);
////    }
////
////    @GetMapping("/{id}")
////    public Movie getMovieById(@PathVariable String id) {
////        return movieService.getMovieById(id);
////    }
////    @GetMapping("/{movieId}/cinemas")
////    public List<CinemaHall> getCinemasForMovie(@PathVariable String movieId) {
////        return movieService.getCinemasForMovie(movieId);  // Assuming you implement this in the MovieService
////    }
////
////
////}
//@RestController
//@RequestMapping("/api/movies")
//public class MovieController {
//    @Autowired
//    private MovieService movieService;
//
//    // Get all movies
//    @GetMapping
//    public List<Movie> getAllMovies() {
//        return movieService.getAllMovies();
//    }
//
//    // Add a new movie
//    @PostMapping
//    public Movie addMovie(@RequestBody Movie movie) {
//        return movieService.addMovie(movie);
//    }
//}


import com.example.jwtmongoauth.authentication.model.Movie;
import com.example.jwtmongoauth.authentication.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    // Get all movies
    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    // Get a specific movie by ID
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String id) {
        return movieService.getMovieById(id)
                .map(movie -> ResponseEntity.ok(movie))
                .orElse(ResponseEntity.notFound().build());
    }

    // Add a new movie
    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    // Update an existing movie
    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable String id, @RequestBody Movie updatedMovie) {
        return movieService.updateMovie(id, updatedMovie)
                .map(movie -> ResponseEntity.ok(movie))
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete a movie
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable String id) {
        if (movieService.deleteMovie(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
