package io.nology.todo_api.todo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/todos")
public class TodoController {

  private TodoService todoService;

  TodoController(TodoService todoService) {
    this.todoService = todoService;
  }


  // READ ALL
  @GetMapping
  public String getAllTodos() {
      return "all todos";
  }

  // READ ONE

  // CREATE

  // UPDATE

  // DELETE




}
