package io.nology.todo_api.category;

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

  @Test
  public void getById_callsFindCategoryById() {
    categoryService.getById(1L);
    verify(categoryRepository).findById(1L);
  }

  @Test
  public Category createCategory_repoSavesCategory() {
    CreateCategoryDTO categoryDto = new CreateCategoryDTO();
    Category category = new Category();
    category.setName(category.getName().toLowerCase());
    when(categoryService.createCategory(categoryDto)).thenReturn(category);
    Category result = categoryService.createCategory(categoryDto);
    verify(categoryRepository).save(any(Category.class));
    assertNotNull(category);
    assertEquals(category, result);
        return result;
  }
}
