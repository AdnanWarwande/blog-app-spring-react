package com.adnanWarwande.blog.repositories;

import com.adnanWarwande.blog.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo  extends JpaRepository<Comment, Integer> {

}
