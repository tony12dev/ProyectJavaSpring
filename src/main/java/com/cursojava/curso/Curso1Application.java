package com.cursojava.curso;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Curso1Application {

	public static void main(String[] args) {
		SpringApplication.run(Curso1Application.class, args);
	}

}
