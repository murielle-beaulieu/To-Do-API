package io.nology.todo_api.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.todo_api.common.exceptions.InvalidRequestException;
import io.nology.todo_api.common.exceptions.NotFoundException;
import jakarta.validation.Valid;


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

  @GetMapping("/active")
  public ResponseEntity<List<Todo>> getAllActive() {
    List<Todo> allActiveTodos = this.todoService.getAllActive();
    return new ResponseEntity<>(allActiveTodos, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Todo> getMethodName(@PathVariable Long id) throws NotFoundException {
    Optional<Todo> foundTodo = this.todoService.getTodoById(id);
    Todo todo = foundTodo.orElseThrow(()-> new NotFoundException("Todo with Id " + id + " does not exist"));
    return new ResponseEntity<>(todo, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Todo> createTodo(@RequestBody @Valid CreateTodoDTO data) throws InvalidRequestException {
      Todo newTodo = this.todoService.createTodo(data);
      return new ResponseEntity<>(newTodo, HttpStatus.CREATED);
  }

  @PostMapping("/{id}")
  public Todo duplicateTodo (@PathVariable Long id) {
      return this.todoService.duplicateTodo(id);
  }

  @PutMapping("/{id}")
  public Optional<Todo> updateTodo(@PathVariable Long id, @RequestBody UpdateTodoDTO data) throws InvalidRequestException {
      Optional<Todo> found = this.todoService.updateTodo(id, data);
      if (found.isEmpty()){
        return found;
      }
      Todo updated = found.get();
      return Optional.of(updated);
  }

  @DeleteMapping("/{id}")
  public void archiveTodo(@PathVariable Long id){
    this.todoService.archiveTodo(id);
  }

}
