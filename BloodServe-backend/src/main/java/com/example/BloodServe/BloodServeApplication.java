package com.example.BloodServe;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BloodServeApplication {

	public static void main(String[] args) {
		try {
			Dotenv dotenv = Dotenv.configure()
					.directory("src/main/resources") // Specify the correct path to .env
					.ignoreIfMissing()
					.load();

			// Check if values exist before setting them
			if (dotenv.get("POSTGRES_URL") != null) {
				System.setProperty("POSTGRES_URL", dotenv.get("POSTGRES_URL"));
			}
			if (dotenv.get("POSTGRES_USERNAME") != null) {
				System.setProperty("POSTGRES_USERNAME", dotenv.get("POSTGRES_USERNAME"));
			}
			if (dotenv.get("POSTGRES_PASSWORD") != null) {
				System.setProperty("POSTGRES_PASSWORD", dotenv.get("POSTGRES_PASSWORD"));
			}

			// Mail properties
			if (dotenv.get("MAIL_HOST") != null) {
				System.setProperty("MAIL_HOST", dotenv.get("MAIL_HOST"));
			}
			if (dotenv.get("MAIL_PORT") != null) {
				System.setProperty("MAIL_PORT", dotenv.get("MAIL_PORT"));
			}
			if (dotenv.get("MAIL_USERNAME") != null) {
				System.setProperty("MAIL_USERNAME", dotenv.get("MAIL_USERNAME"));
			}
			if (dotenv.get("MAIL_PASSWORD") != null) {
				System.setProperty("MAIL_PASSWORD", dotenv.get("MAIL_PASSWORD"));
			}
		} catch (Exception e) {
			System.err.println("Error loading .env file: " + e.getMessage());
		}

		SpringApplication.run(BloodServeApplication.class, args);
	}

}
