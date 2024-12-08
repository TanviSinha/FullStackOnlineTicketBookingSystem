package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.Admin;
import com.example.jwtmongoauth.authentication.repository.AdminRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository){
        this.adminRepository=adminRepository;
    }

    public boolean authenticate(String adminEmail,String adminPassword){
        Optional<Admin> adminOptional = adminRepository.findByAdminEmail(adminEmail);
        if(adminOptional.isPresent()){
            Admin admin = adminOptional.get();
            return new BCryptPasswordEncoder().matches(adminPassword,admin.getAdminPassword());
        }
        throw new BadCredentialsException("Invalid Email or Password");
    }
}
