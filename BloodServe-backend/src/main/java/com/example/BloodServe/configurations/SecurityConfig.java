package com.example.BloodServe.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import com.example.BloodServe.service.CustomSuccessHandler;
import com.example.BloodServe.service.CustomUserDetailsService;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    @Autowired
    CustomSuccessHandler customSuccessHandler;

    @Autowired
    CustomUserDetailsService customUserDetailsService;

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http.csrf(c -> c.disable())


                .authorizeHttpRequests(request -> request.
                        requestMatchers("/admin-page")
                        .hasAuthority("ADMIN")
                        .requestMatchers("/user-page")
                        .hasAuthority("USER")
                        .requestMatchers("/images/*").permitAll()
                        .requestMatchers("/index").permitAll()
                        .requestMatchers("/registration").permitAll()
                        .requestMatchers("/register").permitAll()
                        .requestMatchers("/getById/{id}").permitAll()
                        .requestMatchers("/get")  
                        .permitAll()
                        .requestMatchers("/users").permitAll()
                        .requestMatchers("request-forms/{userId}").permitAll()
                        .requestMatchers("/count").permitAll()
                        .requestMatchers("/requests").permitAll()
                        .requestMatchers("/countAll").permitAll()
                        .requestMatchers("/send-emails{bloodgroup}").permitAll()
                        .requestMatchers("/send-matching-donors").permitAll()
                        .requestMatchers("/send-all").permitAll()
                        .requestMatchers("/he").permitAll()
                        .requestMatchers("/update/{id}").permitAll()
                        .requestMatchers("/delete/{id}").permitAll()
                        .requestMatchers("/login-user").permitAll()
                        .requestMatchers("/get/{keyword}")
                        .permitAll()
                        .requestMatchers("get-role").permitAll()
                        .anyRequest().authenticated())

                .formLogin(form -> form
                        .disable()
                )
                .httpBasic(httpBasic -> httpBasic.disable()) 
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .logout(logout -> logout
                        .invalidateHttpSession(true)
                        .clearAuthentication(true)
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .logoutSuccessUrl("/?logout")
                        .permitAll()
                );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Autowired
    public void configure (AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
}

