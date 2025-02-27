package io.nology.todo_api.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

  private TodoRepository repo;

  TodoService(TodoRepository repo) {
    this.repo = repo;
  }

  public List<Todo> getAll() {
    return this.repo.findAll();
  }

  public Optional<Todo> getTodoById(Long id) {
    return this.repo.findById(id);
  }

  public Todo createTodo(CreateTodoDTO data) {
    Todo newTodo = new Todo();

    newTodo.setTitle(data.getTitle());
    newTodo.setCategory(data.getCategory());

    return this.repo.save(newTodo);
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

    if(data.getCategory() != null){
      foundTodo.setCategory(data.getCategory());
    }

    if(data.getIsArchived() != null){
      foundTodo.setIsArchived(data.getIsArchived());
    }

    System.out.println("Updating todo: " + foundTodo);
    this.repo.save(foundTodo);
    return Optional.of(foundTodo);
  }
}
