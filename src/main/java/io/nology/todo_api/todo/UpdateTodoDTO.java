package io.nology.todo_api.todo;

import jakarta.validation.constraints.NotBlank;

public class UpdateTodoDTO {

  @NotBlank
  private String title;

  private Long categoryId;

  private Boolean isArchived;

  public String getTitle() {
    return title;
  }

  public Long getCategoryId() {
    return categoryId;
  }

  public Boolean getIsArchived() {
    return isArchived;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }

  public void setIsArchived(Boolean isArchived) {
    this.isArchived = isArchived;
  }
}
