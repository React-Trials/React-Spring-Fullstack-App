package com.application.reactapp.repository;

import com.application.reactapp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repository annotation to make it a repository
@Repository
// JpsRepository<ModelName, Primary Key IdType>
public interface StudentRepository extends JpaRepository<Student, Integer> {


}
