package com.knikolov.zuulserver.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
@Configuration
public class ServiceConfig {

    private String jwtSigningKey="abc";


    public String getJwtSigningKey() {
        return jwtSigningKey;
    }

}