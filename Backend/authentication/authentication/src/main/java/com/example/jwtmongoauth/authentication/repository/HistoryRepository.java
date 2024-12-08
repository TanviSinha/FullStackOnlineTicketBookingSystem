package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.History;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//@Repository
//public interface HistoryRepository extends MongoRepository<History, String> {
//}
//package com.example.jwtmongoauth.authentication.repository;
//
//import com.example.jwtmongoauth.authentication.entity.History;
//import org.springframework.data.mongodb.repository.MongoRepository;
//
import java.util.List;
//
public interface HistoryRepository extends MongoRepository<History, String> {
    List<History> findByUserEmail(String email); // Fetch history by user email
}
