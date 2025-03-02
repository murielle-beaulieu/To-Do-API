package io.nology.todo_api.category;

import java.util.Date;
import java.util.List;

import io.nology.todo_api.todo.Todo;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

}
