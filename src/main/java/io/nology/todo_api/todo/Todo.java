package io.nology.todo_api.todo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.todo_api.category.Category;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


@Entity
@Table(name="todos")

public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String title;

  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date createdAt;

  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date updatedAt;

  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date archivedAt;

  @ManyToOne()
  @JoinColumn(name = "categoryId")
  @JsonIgnoreProperties("todos")
  private Category category;

  @Column
  private Boolean isArchived = false;

    public Todo(String title, Category category) {
      this.title = title;
      this.category = category;
  }

  public Todo() {

  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

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

  public Date getCreatedAt() {
    return createdAt;
  }

  public Date getUpdatedAt() {
    return updatedAt;
  }


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


  public Boolean getIsArchived() {
    return this.isArchived;
  }

  public void setIsArchived(Boolean isArchived) {
    this.isArchived = isArchived;
  }

}
