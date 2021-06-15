package com.example.demo.service.impl;

import com.example.demo.converter.AuthorConverter;
import com.example.demo.dto.AddressDTO;
import com.example.demo.dto.AuthorDTO;
import com.example.demo.dto.AuthorSignUpDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.enums.RoleName;
import com.example.demo.exceptions.BadRequestException;
import com.example.demo.model.Author;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.security.RoleNameConstants;
import com.example.demo.service.AuthorService;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;

@Transactional
@AllArgsConstructor
@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final AuthorConverter authorConverter;
    private final UserService usersService;

    @Override
    public List<AuthorDTO> findAll() {
        return authorRepository.findAllDTOConverted();
    }

    @Override
    public AuthorDTO findById(Long id) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("id", "Ushbu id bilan avtor topilmadi!"));
        return authorConverter.toAuthorDTO(author);
    }

    @Override
    public void deleteById(Long id) {
    authorRepository.deleteById(id);
    }

    @Override
    public void registerAuthor(AuthorSignUpDTO authorSignUpDTO) {

        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setCountryId(authorSignUpDTO.getCountryId());
        addressDTO.setCity(authorSignUpDTO.getCity());
        addressDTO.setAddress(authorSignUpDTO.getAddressText());
        authorSignUpDTO.setAddress(addressDTO);

        authorSignUpDTO.setRoles(Collections.singleton(RoleNameConstants.ROLE_AUTHOR));
        UserDTO userDTO = usersService.createUserByRegistration(authorSignUpDTO);

        AuthorDTO dto = new AuthorDTO();
        dto.setUserId(userDTO.getId());
        save(dto);
    }

    public AuthorDTO save(AuthorDTO authorDTO) {
        Author author = authorConverter.fromAuthorDTO(authorDTO);
        author = authorRepository.save(author);
        return authorConverter.toAuthorDTO(author);
    }
}
