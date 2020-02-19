package com.knikolov.routeservice.service;

import com.knikolov.routeservice.model.Address;
import com.knikolov.routeservice.model.Route;

import java.util.List;

public interface RouteService {

    Route saveSeat(Integer routeId, Integer addressId, String username);

    List<Address> getAddresses(String name);

    Iterable<Route> getRoutes(Integer page, String sort, String filter);

}
