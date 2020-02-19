package com.knikolov.routeservice.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "route_id")
    private int id;

    @Column(name = "date_route")
    private LocalDate dateRoute;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    @OneToMany(mappedBy = "routeId")
    private List<RouteStop> routeStops;

    public Route() {
    }

    public int getId() {
        return id;
    }

    public LocalDate getDateRoute() {
        return dateRoute;
    }

    public void setDateRoute(LocalDate dateRoute) {
        this.dateRoute = dateRoute;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public List<RouteStop> getRouteStops() {
        return routeStops;
    }

    public void setRouteStops(List<RouteStop> routeStops) {
        this.routeStops = routeStops;
    }
}
