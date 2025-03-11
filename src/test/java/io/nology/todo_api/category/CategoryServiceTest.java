package io.nology.todo_api.category;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;

public class CategoryServiceTest {
  @Mock
  private CategoryRepository categoryRepository;

  @Spy
  @InjectMocks
  private CategoryService categoryService;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  public void getAll_callsFindAllCategories() {
    categoryService.getAll();
    verify(categoryRepository).findAll();
  }

}
