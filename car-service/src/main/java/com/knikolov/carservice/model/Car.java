package com.knikolov.carservice.model;

import javax.persistence.*;

@Entity
@Table(name = "car")
public class Car {

    @Id
    @Column(name = "car_id")
    @GeneratedValue
    Integer carId;
    @Column(name = "username")
    String username;
    @Column(name = "manufacturer")
    String manufacturer;
    @Column(name = "model")
    String model;
    @Column(name = "seats")
    Integer seats;
    @Column(name = "year")
    Integer year;
    @Column(name = "color")
    String color;

    public Car() {
    }

    public Integer getCarId() {
        return carId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
