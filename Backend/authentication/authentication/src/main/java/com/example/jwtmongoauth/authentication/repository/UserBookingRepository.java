//package com.example.jwtmongoauth.authentication.repository;
//
//import com.example.jwtmongoauth.authentication.model.UserBooking;
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//import java.util.List;
//
//public interface UserBookingRepository extends MongoRepository<UserBooking, String> {
//    List<UserBooking> findByEmail(String email);  // Ensure this returns a List<UserBooking>
//}
package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.model.UserBooking;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface UserBookingRepository extends MongoRepository<UserBooking, String> {
    // Add method to find UserBooking by email
    List<UserBooking> findByEmail(String email);
}
