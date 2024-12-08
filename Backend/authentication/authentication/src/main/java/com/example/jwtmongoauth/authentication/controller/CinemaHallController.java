package com.example.jwtmongoauth.authentication.controller;
import com.example.jwtmongoauth.authentication.model.CinemaHall;
import com.example.jwtmongoauth.authentication.service.CinemaHallService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cinemaHalls")
@CrossOrigin(origins = "http://localhost:4200")
public class CinemaHallController {
    private final CinemaHallService cinemaHallService;

    public CinemaHallController(CinemaHallService cinemaHallService) {
        this.cinemaHallService = cinemaHallService;
    }

    @PostMapping
    public CinemaHall addCinema(@RequestBody CinemaHall cinema) {
        return cinemaHallService.addCinema(cinema);
    }

    @GetMapping("/{movieId}")
    public List<CinemaHall> getCinemaHallsByMovieId(@PathVariable String movieId) {
        return cinemaHallService.getCinemaHallsByMovieId(movieId);
    }
}

