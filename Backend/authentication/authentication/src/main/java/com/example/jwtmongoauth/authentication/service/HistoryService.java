//package com.example.jwtmongoauth.authentication.service;
//
//import com.example.jwtmongoauth.authentication.entity.History;
//import com.example.jwtmongoauth.authentication.repository.HistoryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class HistoryService {
//
//    @Autowired
//    private final HistoryRepository historyRepository;
//
//    public HistoryService(HistoryRepository historyRepository){
//        this.historyRepository = historyRepository;
//    }
//
//    public List<History> getAllOrders(){
//        return historyRepository.findAll();
//    }
//
//    public History saveOrder(History history){
//        return historyRepository.save(history);
//    }
//}
package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.History;
import com.example.jwtmongoauth.authentication.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    public List<History> getUserHistory(String email) {
        return historyRepository.findByUserEmail(email);
    }

    public History addHistory(History history) {
        return historyRepository.save(history);
    }
}
