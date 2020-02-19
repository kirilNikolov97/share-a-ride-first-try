package com.knikolov.profileservice.service;

import com.knikolov.profileservice.model.Car;

import java.util.List;

public interface CarService {

    List<Car> getAllCarsByUser(String username);

    Car getCarById(Integer carId);

    Car addNewCar(Car car, String name);

    Car deleteCar(Integer carId);

    Car updateCar(Car car, String name);
}
