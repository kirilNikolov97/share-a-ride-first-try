package com.knikolov.routeservice.controller;

import com.knikolov.routeservice.model.Route;
import com.knikolov.routeservice.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AllRoutesController {

    private final RouteService routeService;

    @Autowired
    public AllRoutesController(RouteService routeService) {
        this.routeService = routeService;
    }

    @RequestMapping(value = "/route/allRoutes", method = RequestMethod.GET)
    List<Route> getRoutes(@RequestParam Integer page, @RequestParam String sort, @RequestParam String filter) {
        List<Route> routes = new ArrayList<>();
        Iterable<Route> iterableRoute = this.routeService.getRoutes(page, sort, filter);
        for(Route route : iterableRoute) {
            routes.add(route);
        }
        return routes;
    }


}
