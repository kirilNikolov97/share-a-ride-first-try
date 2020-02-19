package com.knikolov.profileservice.service;

import com.knikolov.profileservice.model.Address;
import com.knikolov.profileservice.model.User;
import com.knikolov.profileservice.repository.AddressRepository;
import com.knikolov.profileservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AddressRepository addressRepository;

    @Autowired
    public UserService(UserRepository userRepository, AddressRepository addressRepository) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
    }

    public User getUserByUsername(String username) {
        User u = userRepository.findByUsername(username);
        System.out.println(u.isDriver() + " IS DRIVER?????? \n\n\n\n\n");
        return u;
    }

    public List<Address> getAddressesByUsername(String username) {
        return userRepository.findByUsername(username).getAddresses();
    }

    public Address getAddressById(Integer addressId) {
        return addressRepository.findById(addressId).orElse(null);
    }

    public Address addNewAddress(Address address, String username) {
        User user = userRepository.findByUsername(username);
        List<Address> addresses = user.getAddresses();
        addresses.add(address);
        user.setAddresses(addresses);
        this.userRepository.save(user);
        return address;
    }

    public Address updateAddress(Address address, String username) {
        User user = userRepository.findByUsername(username);
        List<Address> addresses = user.getAddresses();

        Optional<Address> currentAddress = this.addressRepository.findById(address.getId());
        if(currentAddress.isPresent()) {

            currentAddress.get().setCity(address.getCity());
            currentAddress.get().setDistrict(address.getDistrict());
            currentAddress.get().setStreet(address.getStreet());
            currentAddress.get().setAdditionalInfo(address.getAdditionalInfo());

            return this.addressRepository.save(currentAddress.get());
        }

        return null;
    }

    public Address deleteAddress(Integer addressId, String username) {
        User user = this.userRepository.findByUsername(username);
        List<Address> addresses = user.getAddresses();

        int toBeDeleted = -1;
        for(int i = 0; i < addresses.size(); i++) {
            if(addresses.get(i).getId() == addressId) {
                toBeDeleted = i;
            }
        }

        if(toBeDeleted != -1) {
            Address deletedAddress = addresses.remove(toBeDeleted);
            user.setAddresses(addresses);
            this.userRepository.save(user);
            return deletedAddress;
        }

        return null;
    }

    public User becomeDriver(String name) {
        User currentUser = this.userRepository.findByUsername(name);
        currentUser.setDriver(true);
        return this.userRepository.save(currentUser);
    }
}
