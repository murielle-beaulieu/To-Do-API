package io.nology.todo_api.todo;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="todos")

public class Todo {

  public enum TodoCategory {
    WORK,
    HOME,
    LEARNING,
    WELLBEING,
    SOCIAL_LIFE
  }

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

  @Enumerated(EnumType.STRING)
  private TodoCategory category;

  @Column
  private Boolean isArchived = false;

  public Todo(String title, TodoCategory category) {
    this.title = title;
    this.category = category;
  }

  public Todo() {

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

  public TodoCategory getCategory() {
    return this.category;
  }

  public Boolean getIsArchived() {
    return this.isArchived;
  }

  public void setIsArchived(Boolean isArchived) {
    this.isArchived = isArchived;
  }

  public void setCategory(TodoCategory category) {
    this.category = category;
  }

}
