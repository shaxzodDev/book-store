package com.example.demo.auditing;

import com.example.demo.security.service.UserPrinciple;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();


        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.empty();
        }

        if (authentication.getPrincipal() instanceof UserPrinciple) {
            return Optional.of(((UserPrinciple) authentication.getPrincipal()).getUsername());
        }

        //In the case of anonymous user
        return Optional.of(authentication.getPrincipal().toString());
    }
}