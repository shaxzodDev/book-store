package com.example.demo.service.impl;

import com.example.demo.converter.AddressConverter;
import com.example.demo.dto.AddressDTO;
import com.example.demo.repository.AddressRepository;
import com.example.demo.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@AllArgsConstructor
@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;
    private final AddressConverter addressConverter;

    @Override
    public AddressDTO save(AddressDTO addressDTO) {

        return addressConverter.toAddressDTO(
                addressRepository.save(
                        addressConverter.fromAddressDTO(addressDTO)
                )
        );
    }
}
