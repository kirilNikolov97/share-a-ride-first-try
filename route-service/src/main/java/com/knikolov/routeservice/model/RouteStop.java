package com.knikolov.routeservice.model;

import javax.persistence.*;

@Entity
public class RouteStop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "route_stop_id")
    private int id;

    @Column(name = "route_id")
    private Integer routeId;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address addressId;

    @ManyToOne
    @JoinColumn(name="passenger_id")
    private User userId;

    @Column(name = "passenger_enum")
    private String passengerEnum;

    public RouteStop() {
    }

    public int getId() {
        return id;
    }

    public Integer getRouteId() {
        return routeId;
    }

    public void setRouteId(Integer routeId) {
        this.routeId = routeId;
    }

    public Address getAddress() {
        return this.addressId;
    }

    public void setAddress(Address addressId) {
        this.addressId = addressId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getPassengerEnum() {
        return passengerEnum;
    }

    public void setPassengerEnum(String passengerEnum) {
        this.passengerEnum = passengerEnum;
    }
}
