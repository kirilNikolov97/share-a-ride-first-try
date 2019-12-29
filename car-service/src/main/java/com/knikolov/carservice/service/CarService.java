package com.knikolov.carservice.service;

import com.knikolov.carservice.model.Car;
import com.knikolov.carservice.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    CarRepository carRepository;

    public CarService() {
    }

    public List<Car> getAllCars() {

        return carRepository.findAll();

    }


}
