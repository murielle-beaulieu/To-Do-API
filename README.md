# To-Do-API

Spring Boot and React/Typescript Todo Application

## Demo & Snippets

![Ecalidraw Wireframe](https://file%2B.vscode-resource.vscode-cdn.net/Users/jordansolly/Desktop/Excalidraw%20Wireframe.png?version%3D1741816452548)

---

## Requirements / Purpose

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

---

## Build Steps

- how to build / run project
- use proper code snippets if there are any commands to run

---

## Design Goals / Approach

- I aimed to have a clear and organised layout, the tool should help you with your day - not create more confusion. With this in mind, I opted for a SPA design, with clear color and a handwritten font-style, so it has a virtual notebook feel.

---

## Features

- Two main panels: the categories filter buttons in the side panel and the todo list in the main panel
- The categories filter button are where you see your existing categories, which you can update or delete
- In the side panel, you also have categories based on if the todos have been completed or still ongoing, as
  well as a create category button
- In the main panel, you have the todos, encapsulated in their respective sections. Each todos offer options (elipsis button) which allows you to edit, dupplicate or mark the todo as completed
  -In the bottom corner, you have the + button which allows you to create more tasks

---

## Known issues

- While there is some unit tests, end to end testing is still ongoing
- Using peek to null the todos category when deleting
- Each file are pretty code heavy and could use some abstraction
- Will implement context for the data we get from the database

---

## Future Goals

- Implement a sorting by created date function
- Implement a

---

## Change logs

- n/a - 13/03/2025

---

## What did you struggle with?

- Had some issues with circular referencing between the categories and the todos, so I used Jackson Ignore Properties
- Deleting the categories was a bit tricky to work out as there is the relationship between the todo and category.
  I changed the database to allow for the categoryId field to be null and then before deleting the category, I nullified that field for the associated todos

---
