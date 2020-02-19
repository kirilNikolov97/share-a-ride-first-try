package com.knikolov.routeservice.repository;

import com.knikolov.routeservice.model.RouteStop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteStopRepository extends JpaRepository<RouteStop, Integer> {
}
