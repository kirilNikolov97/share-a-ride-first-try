package com.knikolov.profileservice.repository;


import com.knikolov.profileservice.model.RouteStop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RouteStopRepository extends JpaRepository<RouteStop, Integer> {

    List<RouteStop> findAllByRouteId(Integer routeId);

    RouteStop findByRouteIdAndPassengerEnumEquals(Integer routeId, String passengerEnum);
}
