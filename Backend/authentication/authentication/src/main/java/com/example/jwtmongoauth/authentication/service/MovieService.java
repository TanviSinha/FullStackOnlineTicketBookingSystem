package com.example.jwtmongoauth.authentication.service;
import com.example.jwtmongoauth.authentication.model.CinemaHall;
import com.example.jwtmongoauth.authentication.model.Movie;
//import com.example.jwtmongoauth.authentication.repository.CinemaRepository;
import com.example.jwtmongoauth.authentication.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
//
//@Service
//public class MovieService {
//
//    @Autowired
//    private MovieRepository movieRepository;
//
//    @Autowired
//    private CinemaRepository cinemaRepository;
//
//    public List<Movie> getAllMovies() {
//        return movieRepository.findAll();
//    }
//
//    public Movie addMovie(Movie movie) {
//        return movieRepository.save(movie);
//    }
//
//    public Movie getMovieById(String id) {
//        return movieRepository.findById(id).orElseThrow(() -> new RuntimeException("Movie not found"));
//    }
//    public List<CinemaHall> getCinemasForMovie(String movieId) {
//        return cinemaRepository.findByMovieId(movieId);  // Fetch cinemas showing this movie
//    }
//
//
////}
//@Service
//public class MovieService {
//    @Autowired
//    private MovieRepository movieRepository;
//
//    public List<Movie> getAllMovies() {
//        return movieRepository.findAll();
//    }
//
//    public Movie addMovie(Movie movie) {
//        return movieRepository.save(movie);
//    }
//} this is correct okay final wala



@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    // Get all movies
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // Get a movie by ID
    public Optional<Movie> getMovieById(String id) {
        return movieRepository.findById(id);
    }

    // Add a new movie
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // Update an existing movie
    public Optional<Movie> updateMovie(String id, Movie updatedMovie) {
        return movieRepository.findById(id).map(existingMovie -> {
            existingMovie.setName(updatedMovie.getName());
            existingMovie.setGenre(updatedMovie.getGenre());
            existingMovie.setRatings(updatedMovie.getRatings());
            existingMovie.setVotes(updatedMovie.getVotes());
            existingMovie.setImage(updatedMovie.getImage());

            // Add other fields as necessary
            return movieRepository.save(existingMovie);
        });
    }

    // Delete a movie by ID
    public boolean deleteMovie(String id) {
        if (movieRepository.existsById(id)) {
            movieRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

