package com.knikolov.profileservice.controller;

import com.knikolov.profileservice.model.Address;
import com.knikolov.profileservice.service.UserService;
import com.knikolov.profileservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class ProfileController {

    private final UserService userService;

    @Autowired
    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    User getUser(Principal principal) {
        return userService.getUserByUsername(principal.getName());
    }

    @RequestMapping(value = "/address", method = RequestMethod.GET)
    List<Address> getAddress(Principal principal) {
        return userService.getAddressesByUsername(principal.getName());
    }

    @RequestMapping(value = "/address/{addressId}", method = RequestMethod.GET)
    Address getAddressById(@PathVariable Integer addressId) {
        return userService.getAddressById(addressId);
    }

    @RequestMapping(value = "/address", method = RequestMethod.POST)
    Address saveAddress(@RequestBody Address address, Principal principal) {
        return userService.addNewAddress(address, principal.getName());
    }

    @RequestMapping(value = "/address", method = RequestMethod.PATCH)
    Address updateAddress(@RequestBody Address address, Principal principal) {
        return userService.updateAddress(address, principal.getName());
    }

    @RequestMapping(value = "/address", method = RequestMethod.DELETE)
    Address deleteAddress(@RequestParam("addressId") Integer addressId, Principal principal) {
        return userService.deleteAddress(addressId, principal.getName());
    }

    //TODO: Replace GET with PATCH
    @RequestMapping(value = "/becomeDriver", method = RequestMethod.GET)
    User becomeDriver(Principal principal) {
        return this.userService.becomeDriver(principal.getName());
    }

}
