package com.adnanWarwande.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adnanWarwande.blog.entities.Role;

public interface RoleRepo  extends JpaRepository<Role, Integer>{

}
