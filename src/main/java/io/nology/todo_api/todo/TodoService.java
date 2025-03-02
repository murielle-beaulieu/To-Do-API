package io.nology.todo_api.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import io.nology.todo_api.category.Category;
import io.nology.todo_api.category.CategoryService;

@Service
public class TodoService {

  private TodoRepository repo;
  private CategoryService categoryService;

  TodoService(TodoRepository repo, CategoryService categoryService) {
      this.repo = repo;
      this.categoryService = categoryService;
  }

  public List<Todo> getAll() {
    return this.repo.findAll();
  }

  public Optional<Todo> getTodoById(Long id) {
    return this.repo.findById(id);
  }

  public Todo createTodo(CreateTodoDTO data) {
    Todo newTodo = new Todo();
    Category foundCategory = this.categoryService.getById(data.getCategoryId());

    if(foundCategory == null) {
      System.out.println("this is the problem");
    }

    newTodo.setTitle(data.getTitle());
    newTodo.setCategory(foundCategory);

    this.repo.save(newTodo);
    return newTodo;
  }

  public Optional<Todo> updateTodo(Long id, UpdateTodoDTO data) {
    System.out.println("this is your data " + data.getTitle());

    Optional<Todo> result = this.repo.findById(id);
    if (result.isEmpty()) {
      return result;
    }
    Todo foundTodo = result.get();

    if(data.getTitle() != null){
      foundTodo.setTitle(data.getTitle());
    }

    if(data.getCategoryId() != null ){
      foundTodo.setCategory(data.getCategoryId());
    }

    if(data.getIsArchived() != null){
      foundTodo.setIsArchived(data.getIsArchived());
    }

    System.out.println("Updating todo: " + foundTodo);
    this.repo.save(foundTodo);
    return Optional.of(foundTodo);
  }
}
