package com.example.BloodServe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class BloodServeApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure()
			.directory("./")
			.ignoreIfMissing()
			.load();
		
		System.setProperty("MYSQL_URL", dotenv.get("MYSQL_URL"));
		System.setProperty("MYSQL_USERNAME", dotenv.get("MYSQL_USERNAME"));
		System.setProperty("MYSQL_PASSWORD", dotenv.get("MYSQL_PASSWORD"));
		
		System.setProperty("MAIL_HOST", dotenv.get("MAIL_HOST"));
		System.setProperty("MAIL_PORT", dotenv.get("MAIL_PORT"));
		System.setProperty("MAIL_USERNAME", dotenv.get("MAIL_USERNAME"));
		System.setProperty("MAIL_PASSWORD", dotenv.get("MAIL_PASSWORD"));

		SpringApplication.run(BloodServeApplication.class, args);
	}

}
