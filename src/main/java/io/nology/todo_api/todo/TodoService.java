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

  public Todo createTodo(CreateTodoDTO data) throws Exception {
    Todo newTodo = new Todo();
    Category foundCategory = this.categoryService.getById(data.getCategoryId());

    newTodo.setTitle(data.getTitle());
    newTodo.setCategory(foundCategory);

    this.repo.save(newTodo);
    return newTodo;
  }

  public Optional<Todo> updateTodo(Long id, UpdateTodoDTO data) {
    Optional<Todo> found= this.repo.findById(id);
    if (found.isEmpty()) {
      return found;
    }
    Todo result = found.get();

    if(data.getTitle() != null){
      result.setTitle(data.getTitle());
    }

    if(data.getCategoryId() != null ){
      result.setCategory(data.getCategoryId());
    }

    if(data.getIsArchived() != null){
      result.setIsArchived(data.getIsArchived());
    }

    this.repo.save(result);
    return Optional.of(result);
  }
}
