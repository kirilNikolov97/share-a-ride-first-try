package com.knikolov.profileservice.controller;

import com.knikolov.profileservice.service.UserService;
import com.knikolov.profileservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    User getUser(Principal principal) {
        return userService.getUserByUsername(principal.getName());
    }


}
