package io.nology.todo_api.todo;

import io.nology.todo_api.todo.Todo.TodoCategory;

public class UpdateTodoDTO {

  private String title;

  private TodoCategory category;

  private Boolean isArchived;

  public String getTitle() {
    return title;
  }

  public TodoCategory getCategory() {
    return category;
  }

  public Boolean getIsArchived() {
    return isArchived;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCategory(TodoCategory category) {
    this.category = category;
  }

  public void setIsArchived(Boolean isArchived) {
    this.isArchived = isArchived;
  }

}
