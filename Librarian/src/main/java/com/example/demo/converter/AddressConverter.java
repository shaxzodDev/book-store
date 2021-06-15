package com.example.demo.converter;

import com.example.demo.dto.AddressDTO;
import com.example.demo.exceptions.BadRequestException;
import com.example.demo.model.Address;
import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@AllArgsConstructor
@Component
public class AddressConverter {

    private final CountryRepository countryRepository;

    public Address fromAddressDTO(AddressDTO dto) {
        Address address = new Address();
        address.setId(dto.getId());
        address.setAddress(dto.getAddress());
        address.setCity(dto.getCity());

        Country country = countryRepository.findById(dto.getCountryId())
                .orElseThrow(() -> new BadRequestException("country_id", "Ushbu id bilan Mamlakat topilmadi!"));

        address.setCountryId(dto.getCountryId());
        address.setCountry(country);
        return address;
    }

    public AddressDTO toAddressDTO(Address address) {
        AddressDTO dto = new AddressDTO();
        dto.setId(address.getId());
        dto.setAddress(address.getAddress());
        dto.setCity(address.getCity());
        dto.setCountryId(address.getCountryId());
        return dto;
    }
}
