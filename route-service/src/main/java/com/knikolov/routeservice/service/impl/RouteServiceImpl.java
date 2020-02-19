package com.knikolov.routeservice.service.impl;

import com.knikolov.routeservice.model.Address;
import com.knikolov.routeservice.model.Route;
import com.knikolov.routeservice.model.RouteStop;
import com.knikolov.routeservice.model.User;
import com.knikolov.routeservice.repository.*;
import com.knikolov.routeservice.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteServiceImpl implements RouteService {


    private final RouteStopRepository routeStopRepository;
    private final RouteRepository routeRepository;
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final RoutePagingAndSortingRepository routePagingAndSortingRepository;

    @Autowired
    public RouteServiceImpl(
            RouteStopRepository routeStopRepository,
            RouteRepository routeRepository,
            UserRepository userRepository,
            AddressRepository addressRepository,
            RoutePagingAndSortingRepository routePagingAndSortingRepository
    ) {
        this.routeStopRepository = routeStopRepository;
        this.routeRepository = routeRepository;
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
        this.routePagingAndSortingRepository = routePagingAndSortingRepository;
    }

    @Override
    public Route saveSeat(Integer routeId, Integer addressId, String username) {
        RouteStop routeStop = new RouteStop();
        Address address = this.addressRepository.findById(addressId).orElse(null);
        User user = this.userRepository.findByUsername(username);

        if(address != null && user != null) {
            routeStop.setAddress(address);
            routeStop.setPassengerEnum("PASSENGER");
            routeStop.setRouteId(routeId);
            routeStop.setUserId(user);

            this.routeStopRepository.save(routeStop);
        }

        return this.routeRepository.findById(routeId).orElse(null);
    }

    @Override
    public List<Address> getAddresses(String name) {
        User user = this.userRepository.findByUsername(name);
        return user.getAddresses();
    }

    @Override
    public Iterable<Route> getRoutes(Integer page, String sort, String filter) {
        return this.routePagingAndSortingRepository.findAll(PageRequest.of(page, 1, Sort.by("dateRoute").descending()));
    }
}
