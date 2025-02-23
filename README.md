# To-Do-API

Must be able to add categories
Must be able to add new tasks tagged with a task category
Must be able to update tasks automatically by changing the task name and the category / edit button is fine
Must be able to duplicate tasks
Must be able to delete tasks (remember this is soft delete, in the backend it will be isArchived)
You must add your own styling

**Endpoints**

- `GET /categories`
- `POST /categories`
    - `PUT /categories/:id`
- `DELETE /categories/:id`

- `GET /todos`
- `GET /todos?category={}`
- `POST /todos`
- `PUT /todos/:id`
- `DELETE /todos/:id`

# Build steps

Create app and database
Add necessary dependency and configuration of the application.properties (database)

Create entity: Todo
for the entity, create: Repository, Service, Controller

Repository role: base interface, no methods - holds type information and extends other interfaces

Controller role: define the endpoints -> using the defined services

Service role: define the **how** of the response we return to the endpoint
