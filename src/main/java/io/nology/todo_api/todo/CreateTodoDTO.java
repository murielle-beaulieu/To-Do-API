package io.nology.todo_api.todo;

import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotNull;

public class CreateTodoDTO {

  @NotBlank
  private String title;

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

  public void setCategoryId(Long category) {
    this.category = category;
  }

}
