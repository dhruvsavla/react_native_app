package com.yoolol.demo;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class Users {
    @Id
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "dob")
    private Date dob;
    @Column(name = "gender")
    private String gender;
    @Column(name = "join_date")
    private Date join_date;
    @Column(name = "interests")
    private List<String> interests;
    @Column(name = "goals")
    private List<String> goals;
    @Column(name = "bio")
    private String bio;
    @Column(name = "nick_name")
    private String nickname;
    @Column(name = "image")
    private String image;

    public Users() {

    }

    public Users(long id, String name, Date dob, String gender, Date join_date, List<String> interests,
            List<String> goals, String bio, String nickname, byte[] imageBytes) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.join_date = join_date;
        this.interests = interests;
        this.goals = goals;
        this.bio = bio;
        this.nickname = nickname;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getJoin_date() {
        return join_date;
    }

    public void setJoin_date(Date join_date) {
        this.join_date = join_date;
    }

    public List<String> getInterests() {
        return interests;
    }

    public void setInterests(List<String> interests) {
        this.interests = interests;
    }

    public List<String> getGoals() {
        return goals;
    }

    public void setGoals(List<String> goals) {
        this.goals = goals;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
