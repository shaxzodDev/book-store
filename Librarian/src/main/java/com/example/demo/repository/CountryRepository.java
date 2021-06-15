package com.example.demo.repository;

import com.example.demo.model.Country;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {

    @NotNull
    Optional<Country> findById(@NotNull Long id);
}
