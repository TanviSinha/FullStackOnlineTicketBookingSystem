package com.example.jwtmongoauth.authentication.repository;
import com.example.jwtmongoauth.authentication.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//public interface MovieRepository extends MongoRepository<Movie, String> {
//}
@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
}
