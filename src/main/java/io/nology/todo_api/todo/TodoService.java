package io.nology.todo_api.todo;

import java.util.List;
import java.util.Optional;

import javax.management.relation.RelationNotFoundException;

import org.springframework.stereotype.Service;

import io.nology.todo_api.category.Category;
import io.nology.todo_api.category.CategoryRepository;

@Service
public class TodoService {

  private TodoRepository repo;
  private CategoryRepository categoryRepo;

  TodoService(TodoRepository repo, CategoryRepository categoryRepo) {
      this.repo = repo;
      this.categoryRepo = categoryRepo;
  }

  public List<Todo> getAll() {
    return this.repo.findAll();
  }

  public Optional<Todo> getTodoById(Long id) {
    return this.repo.findById(id);
  }

  public Todo createTodo(CreateTodoDTO data) throws Exception {
    Todo newTodo = new Todo();
    if (data.getCategoryId() != null) {
      Category category = categoryRepo.findById(data.getCategoryId())
          .orElseThrow(() -> new RelationNotFoundException("Category not found"));
          newTodo.setCategory(category);
    }

    newTodo.setTitle(data.getTitle());

    this.repo.save(newTodo);
    return newTodo;
  }

  public Optional<Todo> updateTodo(Long id, UpdateTodoDTO data) throws RelationNotFoundException {
    Optional<Todo> found = this.repo.findById(id);
    if (found.isEmpty()) {
      return found;
    }
    Todo result = found.get();

    if (data.getTitle() != null) {
      result.setTitle(data.getTitle());
    }

    if (data.getCategoryId() != null) {
      Category category = categoryRepo.findById(data.getCategoryId())
          .orElseThrow(() -> new RelationNotFoundException("Category not found"));
      result.setCategory(category);
    }

    if (data.getIsArchived() != null) {
      result.setIsArchived(data.getIsArchived());
    }

    this.repo.save(result);
    return Optional.of(result);
  }

  public void archiveTodo(Long id) {
    Optional<Todo> found = this.repo.findById(id);
    Todo result = found.get();

    result.setIsArchived(true);
    this.repo.save(result);
    }
}
