package io.nology.todo_api.todo;

import io.nology.todo_api.todo.Todo.TodoCategory;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class UpdateTodoDTO {

  @NotEmpty
  private String title;

  private TodoCategory category;

  @NotNull
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

}
