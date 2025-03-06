package io.nology.todo_api.category;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/categories")
public class CategoryController {

  private CategoryService categoryService;

  CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

@GetMapping
public List<Category> getAllCategories() {
    return categoryService.getAll();
}

@GetMapping("/{id}")
public Category getCategoryById(@PathVariable Long id) {
    return categoryService.getById(id);
}

@PostMapping
public ResponseEntity<Category> createCategory(@RequestBody @Valid CreateCategoryDTO data) {
  Category newCategory = this.categoryService.createCategory(data);
  return new ResponseEntity<Category>(newCategory, HttpStatus.CREATED);
}

@PutMapping("/{id}/edit")
public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody @Valid UpdateCategoryDTO data) throws Exception{
  Optional<Category> foundCategory = this.categoryService.updateCategory(id, data);
  Category updatedCategory = foundCategory
      .orElseThrow(() -> new Exception("Category with Id " + id + " does not exist"));
  return new ResponseEntity<Category>(updatedCategory, HttpStatus.OK);
}


// not working at the moment, issues with the todo relationship
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteById(@PathVariable Long id){
  boolean deleted = this.categoryService.deleteById(id);
  System.out.println(deleted);
  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}

}
