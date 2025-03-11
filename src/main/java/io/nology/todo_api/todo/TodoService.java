package io.nology.todo_api.todo;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import io.nology.todo_api.category.Category;
import io.nology.todo_api.category.CategoryRepository;
import io.nology.todo_api.common.exceptions.InvalidRequestException;

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

  public List<Todo> getAllActive() {
    List<Todo> results = this.repo.findAll();
    List<Todo> active = (List<Todo>) results.stream().filter((result) -> result.getIsArchived().equals(false))
        .collect(Collectors.toList());
    return active;
  }

  public Optional<Todo> getTodoById(Long id) {
    return this.repo.findById(id);
  }

  public Todo createTodo(CreateTodoDTO data) throws InvalidRequestException {
    Todo newTodo = new Todo();

    if (data.getCategoryId() != null) {
      Category category = categoryRepo.findById(data.getCategoryId())
          .orElseThrow(() -> new InvalidRequestException("Category not found"));
      newTodo.setCategory(category);
    }

    if (data.getCategoryId() == null) {
      newTodo.setCategory(null);
    }

    newTodo.setTitle(data.getTitle());

    this.repo.save(newTodo);
    return newTodo;
  }

  public Todo duplicateTodo(Long id) {
    Todo duplicated = new Todo();
    Optional<Todo> found = this.repo.findById(id);
    Todo existingTodo = found.get();

    duplicated.setTitle(existingTodo.getTitle());

    duplicated.setCategory(existingTodo.getCategory());

    duplicated.setIsArchived(false);

    this.repo.save(duplicated);
    return duplicated;
  }

  public Optional<Todo> updateTodo(Long id, UpdateTodoDTO data) throws InvalidRequestException {
    Optional<Todo> found = this.repo.findById(id);
    if (found.isEmpty()) {
      return found;
    }
    Todo result = found.get();

    if (data.getTitle() != null) {
      result.setTitle(data.getTitle());
    }

    if (data.getCategoryId() == null) {
      result.setCategory(null);
    }

    if (data.getCategoryId() != null) {
      Category category = categoryRepo.findById(data.getCategoryId())
          .orElseThrow(() -> new InvalidRequestException("Category not found"));

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
