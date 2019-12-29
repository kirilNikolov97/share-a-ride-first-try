package com.knikolov.organizationservice.clients;

import com.knikolov.organizationservice.model.Organization;
import com.knikolov.organizationservice.utils.UserContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class OrganizationRestTemplateClient {

    @Autowired
    RestTemplate restTemplate;

    public String getOrganization(String organizationId){

        ResponseEntity<String> restExchange =
                restTemplate.exchange(
                        "http://localhost:8762/organization/test",
                        HttpMethod.DELETE,
                        null, String.class, organizationId);

        return restExchange.getBody();
    }
}