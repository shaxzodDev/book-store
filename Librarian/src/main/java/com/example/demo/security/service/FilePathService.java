package com.example.demo.security.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import com.example.demo.util.FileUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class FilePathService {
	
	public Optional<String> upload(@RequestParam("file") MultipartFile file) {
		if(!file.isEmpty()) {
			// Get the file name, including the suffix			
			String fileName = file.getOriginalFilename();		
			
			 // Store in this path: the path is under the static file in the project directory: (Note: this file may need to be created by yourself)
			 // The reason for putting it under static is that it stores static file resources, that is, you can enter the local server address through the browser, and you can access it when adding the file name
			URL resource;
			String path = null;

			try {
				path = ClassUtils.getDefaultClassLoader() != null
						&& (resource = ClassUtils.getDefaultClassLoader().getResource("")) != null
						? resource.toURI().getPath() + "static/" : "";
				 // This method is a package for writing files. In the util class, import the package and use it. The method will be given later				
				FileUtil.fileUpload(file.getBytes(), path, fileName);
			} catch (Exception e) {
				log.error(e.getMessage(), e);
			}


			return Optional.of(path + fileName);
		}

		return Optional.empty();
	}
}