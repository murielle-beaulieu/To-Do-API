package io.nology.todo_api.todo;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateTodoDTO {

  @NotBlank
  private String title;

  @NotNull
  private Long category;

  public String getTitle() {
    return title;
  }

  public Long getCategoryId() {
    return category;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCategory_id(Long category) {
    this.category = category;
  }

}
