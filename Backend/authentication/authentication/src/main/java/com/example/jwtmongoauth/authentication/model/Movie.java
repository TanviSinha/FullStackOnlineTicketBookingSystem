package com.example.jwtmongoauth.authentication.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

//@Document(collection = "movies")
//public class Movie {
//    @Id
//    private String id;
//    private String title;
//    private String genre;
//    private String rating;
//    private String votes;
//    private String image;
//    private List<CinemaHall> cinemaHalls;
//
//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
//
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getGenre() {
//        return genre;
//    }
//
//    public void setGenre(String genre) {
//        this.genre = genre;
//    }
//
//    public String getRating() {
//        return rating;
//    }
//
//    public void setRating(String rating) {
//        this.rating = rating;
//    }
//
//    public String getVotes() {
//        return votes;
//    }
//
//    public void setVotes(String votes) {
//        this.votes = votes;
//    }
//    public List<CinemaHall> getCinemaHalls() {
//        return cinemaHalls;
//    }
//
//    // Setter for cinemaHalls
//    public void setCinemaHalls(List<CinemaHall> cinemaHalls) {
//        this.cinemaHalls = cinemaHalls;
//    }
//    // Getters and Setters
//}
@Document(collection = "moviess")
public class Movie {
    @Id
    private String id;
    private String name;
    private String genre;
    private String ratings;
    private String votes;       // Number of votes
    private String image;       // Poster URL

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

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getVotes() {
        return votes;
    }

    public void setVotes(String votes) {
        this.votes = votes;
    }

    public String getRatings() {
        return ratings;
    }

    public void setRatings(String ratings) {
        this.ratings = ratings;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
