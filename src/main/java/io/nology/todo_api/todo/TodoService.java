package io.nology.todo_api.todo;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

  private TodoRepository repo;

  TodoService(TodoRepository repo) {
    this.repo = repo;
  }

  public Todo createTodo(CreateTodoDTO data) {
    Todo newTodo = new Todo();

    newTodo.setTitle(data.getTitle());
    newTodo.setCategory(data.getCategory());

    return this.repo.save(newTodo);
  }
}
