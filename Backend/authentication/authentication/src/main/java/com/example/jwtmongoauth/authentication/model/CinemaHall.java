package com.example.jwtmongoauth.authentication.model;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;;
@Document(collection = "cinema_halls")
public class CinemaHall {
    @Id
    private String id;
    private String name;
    private String location;
    private String movieId; // Link to Movie
    private List<String> timeSlots; // e.g., ["10:00 AM", "1:00 PM", "6:00 PM"]
    private List<String> bookedSeats = new ArrayList<>(); // Initialize here

    private double ticketPrice; // Price for a single ticket

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public List<String> getTimeSlots() {
        return timeSlots;
    }

    public void setTimeSlots(List<String> timeSlots) {
        this.timeSlots = timeSlots;
    }

    public List<String> getBookedSeats() {
        if (bookedSeats == null) {
            bookedSeats = new ArrayList<>(); // Prevent null issues
        }
        return bookedSeats;
    }

    public void setBookedSeats(List<String> bookedSeats) {
        this.bookedSeats = bookedSeats;
    }
    public double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

}



