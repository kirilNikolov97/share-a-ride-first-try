package com.knikolov.profileservice.repository;
import com.knikolov.profileservice.model.Route;

import com.knikolov.profileservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface RouteRepository extends JpaRepository<Route, Integer> {

    @Query(value = "SELECT r FROM Route r JOIN RouteStop rs ON r.id = rs.routeId WHERE rs.userId = ?1 AND rs.passengerEnum = 'DRIVER' AND r.dateRoute <= ?2")
    List<Route> findAllByUserIdAsDriver(User userId, LocalDate date);

    @Query(value = "SELECT r FROM Route r JOIN RouteStop rs ON r.id = rs.routeId WHERE rs.userId = ?1 AND rs.passengerEnum = 'DRIVER' AND r.dateRoute > ?2")
    List<Route> findAllFutureRoutesByUserIdAsDriver(User userId, LocalDate date);

    @Query(value = "SELECT r FROM Route r JOIN RouteStop rs ON r.id = rs.routeId WHERE rs.userId = ?1 AND rs.passengerEnum = 'PASSENGER' ")
    List<Route> findAllByUserIdAsPassenger(User userId);

    @Query(value = "SELECT r FROM Route r JOIN RouteStop rs ON r.id = rs.routeId WHERE rs.userId = ?1 AND rs.passengerEnum = 'PASSENGER' AND r.dateRoute > ?2")
    List<Route> findAllFutureRoutesByUserIdAsPassenger(User user, LocalDate now);

    @Query(value = "SELECT r FROM Route r WHERE r.dateRoute > ?1 ORDER BY r.id DESC")
    List<Route> findAllByOrderByIdDesc(LocalDate now);

}
