package com.knikolov.profileservice.repository;

import com.knikolov.profileservice.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

interface AddressRepository extends JpaRepository<Address, Integer> {

}
