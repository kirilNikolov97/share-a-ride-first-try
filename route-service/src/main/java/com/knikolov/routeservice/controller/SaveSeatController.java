package com.knikolov.routeservice.controller;

import com.knikolov.routeservice.model.Address;
import com.knikolov.routeservice.model.Route;
import com.knikolov.routeservice.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class SaveSeatController {

    private final RouteService routeService;

    @Autowired
    public SaveSeatController(RouteService routeService) {
        this.routeService = routeService;
    }

    @RequestMapping(value = "/addresses", method = RequestMethod.GET)
    List<Address> getAddresses(Principal principal) {
        return this.routeService.getAddresses(principal.getName());
    }

    @RequestMapping(value = "/route/{routeId}", method = RequestMethod.GET)
    Route saveSeat(@PathVariable Integer routeId, @RequestParam Integer addressId, Principal principal) {
        return this.routeService.saveSeat(routeId, addressId, principal.getName());
    }

}
