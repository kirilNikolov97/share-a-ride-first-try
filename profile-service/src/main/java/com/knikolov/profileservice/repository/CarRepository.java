package com.knikolov.profileservice.repository;


import com.knikolov.profileservice.model.Car;
import com.knikolov.profileservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {

    List<Car> findAllByUserId(Integer userId);

}
