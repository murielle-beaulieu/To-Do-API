package io.nology.todo_api.todo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/todos")
public class TodoController {

  private TodoService todoService;

  TodoController(TodoService todoService){
    this.todoService = todoService;
  }

  @GetMapping
  public String getAllTodos() {
      return "hello all tasks";
  }

  @PostMapping
  public ResponseEntity<Todo> createTodo(@RequestBody @Valid CreateTodoDTO data) {
      Todo newTodo = this.todoService.createTodo(data);
      return new ResponseEntity<Todo>(newTodo, HttpStatus.CREATED);
  }

  // @PostMapping("/{id}/edit")
  // public String updateTodo(@PathVariable Long id) {
  //     return " hey it's working! id: " + id;
  // }


}
