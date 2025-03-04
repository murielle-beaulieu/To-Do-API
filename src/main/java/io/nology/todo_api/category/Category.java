package io.nology.todo_api.category;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.todo_api.todo.Todo;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    @OneToMany(mappedBy = "category")
    private List<Todo> todos;

    public Category() {}

    @PrePersist
    public void onCreate() {
        Date timestamp = new Date();
        createdAt = timestamp;
        updatedAt = timestamp;
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = new Date();
    }

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public Date getCreatedAt() {
      return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
      this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
      return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
      this.updatedAt = updatedAt;
    }

    public List<Todo> getTodos() {
      return todos;
    }

    public void setTodos(List<Todo> todos) {
      this.todos = todos;
    }

}
