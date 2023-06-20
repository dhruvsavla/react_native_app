package com.yoolol.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public UserService() {

    }

    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public Users saveUsers(Users user) {
        return userRepository.save(user);
    }
}
