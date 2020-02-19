package com.knikolov.profileservice.service.impl;

import com.knikolov.profileservice.model.Car;
import com.knikolov.profileservice.model.User;
import com.knikolov.profileservice.repository.CarRepository;
import com.knikolov.profileservice.repository.UserRepository;
import com.knikolov.profileservice.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;
    private final UserRepository userRepository;

    @Autowired
    public CarServiceImpl(CarRepository carRepository, UserRepository userRepository) {
        this.carRepository = carRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Car> getAllCarsByUser(String username) {
        User user = this.userRepository.findByUsername(username);
        return this.carRepository.findAllByUserId(user.getId());
    }

    @Override
    public Car getCarById(Integer carId) {
        return this.carRepository.findById(carId).orElse(null);
    }

    @Override
    public Car addNewCar(Car car, String username) {
//        User user = this.userRepository.findByUsername(username);
////        List<Car> cars = user.getCars();
////        cars.add(car);
////        user.setCars(cars);
////        this.userRepository.save(user);

        User user = this.userRepository.findByUsername(username);
        car.setUserId(user.getId());

        return this.carRepository.save(car);
    }

    @Override
    public Car deleteCar(Integer carId) {
        Car carToDelete = this.carRepository.findById(carId).orElse(null);
        if(carToDelete != null) {
            this.carRepository.delete(carToDelete);
            return carToDelete;
        } else {
            return null;
        }
    }

    @Override
    public Car updateCar(Car car, String name) {
        Car carToUpdate = this.carRepository.findById(car.getId()).orElse(null);

        if(carToUpdate != null) {
            carToUpdate.setManufacturer(car.getManufacturer());
            carToUpdate.setModel(car.getModel());
            carToUpdate.setColor(car.getColor());
            carToUpdate.setSeats(car.getSeats());
            carToUpdate.setYear(car.getYear());

            return this.carRepository.save(carToUpdate);
        } else {
            return null;
        }

    }


}
