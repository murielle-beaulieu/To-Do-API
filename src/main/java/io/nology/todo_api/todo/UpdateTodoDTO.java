package io.nology.todo_api.todo;

import io.nology.todo_api.category.Category;
import jakarta.validation.constraints.NotBlank;

public class UpdateTodoDTO {

  @NotBlank
  private String title;

  private Category category_id;

  private Boolean isArchived;

  public String getTitle() {
    return title;
  }

  public Category getCategoryId() {
    return category_id;
  }

  public Boolean getIsArchived() {
    return isArchived;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCategoryId(Category category_id) {
    this.category_id = category_id;
  }

  public void setIsArchived(Boolean isArchived) {
    this.isArchived = isArchived;
  }

}
