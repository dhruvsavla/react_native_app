package com.yoolol.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @Autowired
    UserService userService;

    @GetMapping("sayHello")
    public String Hello() {
        return "Hello World";
    }

    @GetMapping("getUsers")
    public List<Users> getStudents() {
        return userService.getUsers();
    }

    @PostMapping("addUsers")
    public Users SaveUsers(@RequestBody Users user) {
        return userService.saveUsers(user);
    }
}
