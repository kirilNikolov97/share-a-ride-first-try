package com.knikolov.routeservice.repository;

import com.knikolov.routeservice.model.Route;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface RoutePagingAndSortingRepository extends PagingAndSortingRepository<Route, Integer> {

}
