package com.knikolov.carservice.controller;

import com.knikolov.carservice.model.Car;
import com.knikolov.carservice.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {

    @Autowired
    CarService carService;

    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @RequestMapping(value = "test", method = RequestMethod.GET)
    String test() {
        return "test";
    }

    @RequestMapping(value = "/mycars", method = RequestMethod.GET)
    List<Car> getCarsByUsername(Principal principal) {

        return carService.getCarsByUsername(principal.getName());
    }

}
