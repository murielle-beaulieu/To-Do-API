package io.nology.todo_api.todo;

import io.nology.todo_api.todo.Todo.TodoCategory;
import jakarta.validation.constraints.NotBlank;

public class CreateTodoDTO {

  @NotBlank
  private String title;

  private TodoCategory category;

  public String getTitle() {
    return title;
  }

  public TodoCategory getCategory() {
    return category;
  }

}
