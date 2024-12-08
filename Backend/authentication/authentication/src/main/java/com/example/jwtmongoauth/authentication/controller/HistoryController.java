//package com.example.jwtmongoauth.authentication.controller;
//
//import com.example.jwtmongoauth.authentication.entity.History;
//import com.example.jwtmongoauth.authentication.service.HistoryService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/user/history")
//@CrossOrigin(origins = "http://localhost:4200")
//public class HistoryController {
//    private final HistoryService historyService;
//
//    public HistoryController(HistoryService historyService) {
//        this.historyService = historyService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<History>> getAllOrders() {
//        return ResponseEntity.ok(historyService.getAllOrders());
//    }
//
//    @PostMapping("/bookings")
//    public ResponseEntity<History> saveOrder(@RequestBody History order) {
//        order.setDate(LocalDate.now());
//        order.setStatus("Pending"); // Default status
//        return ResponseEntity.ok(historyService.saveOrder(order));
//    }
//}
package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.entity.History;
import com.example.jwtmongoauth.authentication.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "http://localhost:4200")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    // Get user history by email
    @GetMapping("/{email}")
    public List<History> getUserHistory(@PathVariable String email) {
        return historyService.getUserHistory(email);
    }

    // Add a new history record
    @PostMapping
    public History addHistory(@RequestBody History history) {
        return historyService.addHistory(history);
    }
}
