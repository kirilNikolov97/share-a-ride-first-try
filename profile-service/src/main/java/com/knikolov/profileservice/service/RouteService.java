package com.knikolov.profileservice.service;

import com.knikolov.profileservice.model.Route;

import java.time.LocalDate;
import java.util.List;

public interface RouteService {

    List<Route> getAllRoutesByUserAsDriver(String username);

    List<Route> getAllFutureRoutesByUserAsDriver(String name);

    List<Route> getAllRoutesByUserAsPassenger(String username);

    List<Route> getAllFutureRoutesByUserAsPassenger(String name);

    List<Route> getAllRoutes();

    Route addNewRoute(Integer carId, Integer addressId, LocalDate date, String name);

    Route updateFutureRoute(Integer carId, Integer addressId, Integer routeId, LocalDate date, String name);

    Route getRouteById(Integer routeId, String name);

    List<Route> getLastRoutes(Integer limit, String name);

}
