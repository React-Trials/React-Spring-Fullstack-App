package com.application.reactapp.service;

import com.application.reactapp.model.Student;
import com.application.reactapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service annotation indicates that a class belongs to the service layer and is a service provider.
// overall @Service is used with classes that provide some business functionalities.
// Spring will auto-detect these classes when annotation based configuration and classpath scanning is used.
@Service
public class StudentServiceImplementation implements StudentService{

    @Autowired // automatic dependency injection injects the StudentRepository class into the StudentServiceImplementation class
    private StudentRepository studentRepository;

    // @Override means that the child class method overrides the base class method, in this case saveStudent does not exist in
    // StudentRepository class
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
