package com.Welness.backend.controller;


import com.Welness.backend.entity.Field;
import com.Welness.backend.repository.FieldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/persons")
@Transactional
public class FieldController {
    @Autowired
    FieldRepository fieldRepository;

    @GetMapping
    public List<Field> getAllFields() {
        return fieldRepository.findAll();
    }
}
