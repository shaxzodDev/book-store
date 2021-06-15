package com.example.demo.converter;

import com.example.demo.dto.AddressDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.request.SignupDTO;
import com.example.demo.enums.RoleName;
import com.example.demo.model.Address;
import com.example.demo.model.Author;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.AddressRepository;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.security.RoleNameConstants;
import com.example.demo.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.Set;

@Transactional
@AllArgsConstructor
@Component
public class UserConverter {

    private final RoleRepository roleRepository;
    private final PasswordEncoder encoder;
    private final AddressService addressService;
    private final AddressConverter addressConverter;
    private final AddressRepository addressRepository;
    private final AuthorRepository authorRepository;

    public User fromSignupDTO(SignupDTO dto) {
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        Address address = addressRepository.save(addressConverter.fromAddressDTO(dto.getAddress()));
        user.setAddressId(address.getId());
        user.setAddress(address);
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setEmail(dto.getEmail());
        user.setUsername(dto.getUsername());

        Set<Role> roles = new HashSet<>();
        dto.getRoles().forEach(role -> {
            switch (role) {
                case RoleNameConstants.ROLE_AUTHOR:
                    Role employerRole = roleRepository.findByName(RoleName.AUTHOR)
                            .orElseThrow(() -> new RuntimeException("Bunday foydalanuvchi turi mavjud emas!"));
                    roles.add(employerRole);

                    break;

                case RoleNameConstants.ROLE_LIBRARIAN:
                    Role studentRole = roleRepository.findByName(RoleName.LIBRARIAN)
                            .orElseThrow(() -> new RuntimeException("Bunday foydalanuvchi turi mavjud emas!"));
                    roles.add(studentRole);

                    break;

                case RoleNameConstants.ROLE_READER:

                default:
                    Role userRole = roleRepository.findByName(RoleName.READER)
                            .orElseThrow(() -> new RuntimeException("Bunday foydalanuvchi turi mavjud emas!"));
                    roles.add(userRole);

            }
        });

        user.setRoles(roles);
        user.setPasswordHash(encoder.encode(dto.getPassword()));

        return user;
    }

    public UserDTO toUserDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setAddress(user.getAddress() != null ? addressConverter.toAddressDTO(user.getAddress()) : null);
        dto.setAddressId(user.getAddressId());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setRoles(user.getRoles());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setUsername(user.getUsername());
        dto.setCreatedDate(DateTimeFormatter.ofPattern("dd MM yyyy").withZone(ZoneId.systemDefault()).format(user.getCreatedDate()));
        dto.setSlogan(authorRepository.findByUsername(user.getUsername()).map(Author::getSlogan).orElse(""));

        return dto;
    }
}
