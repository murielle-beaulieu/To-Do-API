package io.nology.todo_api.todo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;

import io.nology.todo_api.common.exceptions.InvalidRequestException;

public class TodoServiceTest {
  @Mock
  private TodoRepository todoRepository;

  @Spy
  @InjectMocks
  private TodoService todoService;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  public void getAll_callsFindAllTodos() {
    todoService.getAll();
    verify(todoRepository).findAll();
  }

  @Test
  public void getAllActive_callsFindAllActiveTodos() {
    todoService.getAllActive();
    verify(todoRepository).findAll();
  }

  @Test
  public void getById_callsFindTodoById() {
    todoService.getTodoById(1L);
    verify(todoRepository).findById(1L);
  }

  @Test
  public void createTodo_repoSavesTodo() throws InvalidRequestException {
    CreateTodoDTO todoDto = new CreateTodoDTO();
    Todo mockTodo = new Todo();
    when(todoService.createTodo(todoDto)).thenReturn(mockTodo);
    Todo result = todoService.createTodo(todoDto);
    verify(todoRepository).save(any(Todo.class));
    assertNotNull(result);
    assertEquals(mockTodo, result);
  }
}
