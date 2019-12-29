package com.knikolov.carservice.controller;

import com.knikolov.carservice.model.Car;
import com.knikolov.carservice.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}
