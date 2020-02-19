package com.knikolov.profileservice.service.impl;

import com.knikolov.profileservice.model.*;
import com.knikolov.profileservice.repository.AddressRepository;
import com.knikolov.profileservice.repository.RouteRepository;
import com.knikolov.profileservice.repository.RouteStopRepository;
import com.knikolov.profileservice.service.CarService;
import com.knikolov.profileservice.service.RouteService;
import com.knikolov.profileservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class RouteServiceImpl implements RouteService {

    private final RouteRepository routeRepository;
    private final UserService userService;
    private final CarService carService;
    private final AddressRepository addressRepository;
    private final RouteStopRepository routeStopRepository;


    @Autowired
    public RouteServiceImpl(RouteRepository routeRepository, UserService userService, CarService carService, AddressRepository addressRepository, RouteStopRepository routeStopRepository) {
        this.routeRepository = routeRepository;
        this.userService = userService;
        this.carService = carService;
        this.addressRepository = addressRepository;
        this.routeStopRepository = routeStopRepository;
    }

    @Override
    public List<Route> getAllRoutesByUserAsDriver(String username) {
        User user = this.userService.getUserByUsername(username);
        List<Route> routes = this.routeRepository.findAllByUserIdAsDriver(user, LocalDate.now());
        System.out.println("\n\n\n\n ROUTES SIZE " + routes.size());
        return routes;
    }

    @Override
    public List<Route> getAllFutureRoutesByUserAsDriver(String username) {
        User user = this.userService.getUserByUsername(username);
        List<Route> routes = this.routeRepository.findAllFutureRoutesByUserIdAsDriver(user, LocalDate.now());
        System.out.println("\n\n\n\n ROUTES SIZE " + routes.size());
        return routes;
    }

    @Override
    public List<Route> getAllRoutesByUserAsPassenger(String username) {
        User user = this.userService.getUserByUsername(username);
        return this.routeRepository.findAllByUserIdAsPassenger(user);
    }

    @Override
    public List<Route> getAllFutureRoutesByUserAsPassenger(String name) {
        User user = this.userService.getUserByUsername(name);
        return this.routeRepository.findAllFutureRoutesByUserIdAsPassenger(user, LocalDate.now());
    }

    @Override
    public List<Route> getAllRoutes() {
        return null;
    }

    @Override
    public Route addNewRoute(Integer carId, Integer addressId, LocalDate date, String name) {
        User user = this.userService.getUserByUsername(name);
        Car car = this.carService.getCarById(carId);
        Address address = this.addressRepository.findById(addressId).orElse(null);

        if(car != null && address != null) {
            Route route = new Route();
            route.setCar(car);
            route.setDateRoute(date);
            route.setRouteStops(new ArrayList<>());

            Route savedRoute = this.routeRepository.save(route);

            RouteStop routeStop = new RouteStop();
            routeStop.setUserId(user);
            routeStop.setAddress(address);
            routeStop.setPassengerEnum(PassengerEnum.DRIVER.toString());
            routeStop.setRouteId(savedRoute.getId());

            RouteStop savedRouteStop = this.routeStopRepository.save(routeStop);
        }

        return null;
    }

    @Override
    public Route updateFutureRoute(Integer carId, Integer addressId, Integer routeId, LocalDate date, String name) {
        User user = this.userService.getUserByUsername(name);
        Car car = this.carService.getCarById(carId);
        Address address = this.addressRepository.findById(addressId).orElse(null);
        Route route = this.routeRepository.findById(routeId).orElse(null);

        if(car != null && address != null && route != null) {
            route.setCar(car);
            route.setDateRoute(date);

            RouteStop routeStop = this.routeStopRepository.findByRouteIdAndPassengerEnumEquals(routeId, PassengerEnum.DRIVER.toString());
            routeStop.setAddress(address);
            this.routeStopRepository.save(routeStop);

            return this.routeRepository.save(route);
        }

        return null;

    }

    @Override
    public Route getRouteById(Integer routeId, String name) {
        Route route = this.routeRepository.findById(routeId).orElse(null);
        if(route != null) {
            List<RouteStop> stops = this.routeStopRepository.findAllByRouteId(routeId);
            route.setRouteStops(stops);
            return route;
        }
        return null;
    }

    @Override
    public List<Route> getLastRoutes(Integer limit, String name) {
        User user = this.userService.getUserByUsername(name);
        List<Route> routes = this.routeRepository.findAllByOrderByIdDesc(LocalDate.now());
        if(routes.size() <= limit) {
            return routes;
        } else {
            return routes.subList(0, limit);
        }
    }

}
