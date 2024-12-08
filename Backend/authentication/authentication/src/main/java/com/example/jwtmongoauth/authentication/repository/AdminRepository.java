package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String > {
    Optional<Admin> findByAdminEmail(String adminEmail);

}
