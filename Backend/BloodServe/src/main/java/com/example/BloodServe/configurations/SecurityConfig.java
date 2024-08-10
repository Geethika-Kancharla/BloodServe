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

                        .requestMatchers("/get")  // Protect the endpoint
                        .permitAll()
                        .requestMatchers("/delete/{id}").permitAll()
                        .requestMatchers("/login-user").permitAll()
                        .requestMatchers("/get/{keyword}")
                        .permitAll()
                        .requestMatchers("get-role").permitAll()
                        .anyRequest().authenticated())

                .formLogin(form -> form
                        .disable()
                )
                .httpBasic(httpBasic -> httpBasic.disable()) // Disable HTTP Basic Auth
                .logout(logout -> logout
                        .invalidateHttpSession(true)
                        .clearAuthentication(true)
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .logoutSuccessUrl("/?logout")
                        .permitAll()
                );

        return http.build();

    }



    @Autowired
    public void configure (AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
}

