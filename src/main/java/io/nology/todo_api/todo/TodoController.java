package io.nology.todo_api.todo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/todos")
public class TodoController {

  private TodoService todoService;

  TodoController(TodoService todoService){
    this.todoService = todoService;
  }

  @GetMapping
  public ResponseEntity<List<Todo>> getAllTodos() {
    List<Todo> allTodos = this.todoService.getAll();
    return new ResponseEntity<>(allTodos, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Todo> getMethodName(@PathVariable Long id) throws Exception {
    Optional<Todo> foundTodo = this.todoService.getTodoById(id);
    Todo todo = foundTodo.orElseThrow(()-> new Exception("Todo with Id " + id + " does not exist"));
    return new ResponseEntity<Todo>(todo, HttpStatus.OK);
  }


  @PostMapping
  public ResponseEntity<Todo> createTodo(@RequestBody @Valid CreateTodoDTO data) {
      Todo newTodo = this.todoService.createTodo(data);
      return new ResponseEntity<Todo>(newTodo, HttpStatus.CREATED);
  }

  @PutMapping("/{id}/edit")
  public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody UpdateTodoDTO data ) throws Exception {
    Optional<Todo> found = this.todoService.updateTodo(id, data);
    Todo updatedTodo = found
    .orElseThrow(() -> new Exception("Todo with Id " + id + " does not exist"));
    return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
  }

}
