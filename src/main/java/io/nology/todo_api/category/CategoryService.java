package io.nology.todo_api.category;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class CategoryService {

  private CategoryRepository repo;

  CategoryService(CategoryRepository repo) {
    this.repo = repo;
  }

  public List<Category> getAll() {
    return this.repo.findAll();
  }

  public Category getById(Long id) {
    Optional<Category> found = this.repo.findById(id);
    if (!found.isPresent()){
      return null;
    }

    return found.get();
  }

  public Category createCategory(CreateCategoryDTO data) {
    Category newCategory = new Category();

    newCategory.setName(data.getName());

    return this.repo.save(newCategory);

  }

  public Optional<Category> updateCategory(Long id, UpdateCategoryDTO data) {
  Optional<Category> found = this.repo.findById(id);
  if (found.isEmpty()) {
    return found;
  }
  Category result = found.get();

  if(data.getName() != null){
    result.setName(data.getName());
  }

  this.repo.save(result);
  return Optional.of(result);

  }

  public boolean deleteById(Long id) {
    this.repo.deleteById(id);
    return true;
  }

}
