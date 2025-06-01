package io.nology.todo_api.category;

import jakarta.validation.constraints.NotBlank;


public class UpdateCategoryDTO {

  private String name;

  @NotBlank
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

}
