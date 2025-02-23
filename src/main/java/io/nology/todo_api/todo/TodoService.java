package io.nology.todo_api.todo;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

  private TodoRepository repo;

  TodoService(TodoRepository repo) {
    this.repo = repo;
  }

}
