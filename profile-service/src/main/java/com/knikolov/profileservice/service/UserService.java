package com.knikolov.profileservice.service;

import com.knikolov.profileservice.model.User;
import com.knikolov.profileservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public UserService() {
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
