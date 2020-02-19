package com.knikolov.profileservice.controller;

import com.knikolov.profileservice.model.Address;
import com.knikolov.profileservice.model.Car;
import com.knikolov.profileservice.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class CarController {

    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    List<Car> getAllCarsByUser(Principal principal) {
        return this.carService.getAllCarsByUser(principal.getName());
    }

    @RequestMapping(value = "/car/{carId}", method = RequestMethod.GET)
    Car getCarById(@PathVariable Integer carId) {
        return carService.getCarById(carId);
    }

    @RequestMapping(value = "/car", method = RequestMethod.DELETE)
    Car deleteCarById(@RequestParam("carId") Integer carId) {
        return carService.deleteCar(carId);
    }

    @RequestMapping(value = "/car", method = RequestMethod.POST)
    Car addNewCar(@RequestBody Car car, Principal principal) {
        return carService.addNewCar(car, principal.getName());
    }

    @RequestMapping(value = "/car", method = RequestMethod.PATCH)
    Car updateCar(@RequestBody Car car, Principal principal) {
        return carService.updateCar(car, principal.getName());
    }

}
