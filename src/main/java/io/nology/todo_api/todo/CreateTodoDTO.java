package io.nology.todo_api.todo;
import java.util.Locale.Category;

import jakarta.validation.constraints.NotBlank;

public class CreateTodoDTO {

  @NotBlank
  private String title;

  @NotBlank
  private Category category;

  public String getTitle() {
    return title;
  }

  public String getCategory() {
    return category.toString();
  }

}
