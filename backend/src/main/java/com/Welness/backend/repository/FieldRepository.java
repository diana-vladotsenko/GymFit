package com.Welness.backend.repository;
import com.Welness.backend.entity.Field;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FieldRepository extends JpaRepository <Field, Long>{

}
