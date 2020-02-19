package com.knikolov.profileservice.controller;

import com.knikolov.profileservice.model.Route;
import com.knikolov.profileservice.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@RestController
public class RouteController {

    private final RouteService routeService;

    @Autowired
    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @RequestMapping(value = "/routesAsDriver", method = RequestMethod.GET)
    List<Route> getRoutesByUsernameAsDriver(Principal principal) {
        return this.routeService.getAllRoutesByUserAsDriver(principal.getName());
    }

    @RequestMapping(value = "/futureRoutesAsDriver", method = RequestMethod.GET)
    List<Route> getFutureRoutesByUsernameAsDriver(Principal principal) {
        return this.routeService.getAllFutureRoutesByUserAsDriver(principal.getName());
    }

    @RequestMapping(value = "/futureRoutesAsPassenger", method = RequestMethod.GET)
    List<Route> getFutureRoutesByUsernameAsPassenger(Principal principal) {
        return this.routeService.getAllFutureRoutesByUserAsPassenger(principal.getName());
    }

    @RequestMapping(value = "/routesAsPassenger", method = RequestMethod.GET)
    List<Route> getRoutesByUsernameAsPassenger(Principal principal) {
        return this.routeService.getAllRoutesByUserAsPassenger(principal.getName());
    }

    @RequestMapping(value = "/route/{routeId}", method = RequestMethod.GET)
    Route getRouteById(@PathVariable Integer routeId, Principal principal) {
        return this.routeService.getRouteById(routeId, principal.getName());
    }

    @RequestMapping(value = "/route", method = RequestMethod.POST)
    Route addNewRoute(@RequestParam Integer carId, @RequestParam Integer addressId, @RequestBody LocalDate date,
                      Principal principal) {
        System.out.println(carId + "   " + addressId + " " + date);
        return this.routeService.addNewRoute(carId, addressId, date, principal.getName());
    }

    @RequestMapping(value = "/route", method = RequestMethod.PATCH)
    Route updateFutureRoute(@RequestParam Integer carId, @RequestParam Integer addressId, @RequestParam Integer routeId,
                            @RequestBody LocalDate date, Principal principal) {
        return this.routeService.updateFutureRoute(carId, addressId, routeId, date, principal.getName());
    }

    @RequestMapping(value = "/lastRoutes", method = RequestMethod.GET)
    List<Route> getLastRoutes(@RequestParam Integer limit, Principal principal) {
        return this.routeService.getLastRoutes(limit, principal.getName());
    }


}
