package com.example.demo.controller;

import com.example.demo.dto.PostDTO;
import com.example.demo.model.Author;
import com.example.demo.model.Post;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.PostRepository;
import com.example.demo.security.service.UserPrinciple;
import com.example.demo.service.PostService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class PostController {

    private final PostService postService;
    private final AuthorRepository authorRepository;
    private final PostRepository postRepository;

    @PostMapping("/post")//TODO it is very bad practice, fix it, once diplom ishi is done
    public ResponseEntity<?> create(@RequestBody PostDTO dto) {
        Long userId = SecurityContextHolder.getContext() != null
                && SecurityContextHolder.getContext().getAuthentication() != null
                && SecurityContextHolder.getContext().getAuthentication().getPrincipal() != null
                ? ((UserPrinciple) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId() : -1L;
        Optional<Author> authorOptional = authorRepository.findByUserId(userId);
        Post post = new Post();
        post.setContent(dto.getContent());
//        post.setAuthorId(authorOptional.map(Author::getId).orElse(null));
        post.setAuthor(authorOptional.orElse(null));
        postService.create(post);

        return ResponseEntity.ok("success");
    }

    @GetMapping("/posts")
    public ResponseEntity<List<PostDTO>> postList() {

        return ResponseEntity.ok(postRepository.findAll()
                .stream()
                .map(p -> {
                    PostDTO dto = new PostDTO();
                    dto.setAuthorFullName(p.getAuthor() != null
                            && p.getAuthor().getUser() != null
                            ? p.getAuthor().getUser().getFullName() : "");
                    dto.setId(p.getId());
                    dto.setContent(p.getContent());
                    return dto;
                }).collect(Collectors.toList()));
    }
}
