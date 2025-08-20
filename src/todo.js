// src/todo.js
// STARTING POINT (v1.0.0): minimal task functions

export function createTask(title) {
  if (!title || typeof title !== "string") {
    throw new Error("title is required");
  }
  const trimmed = title.trim();
  if (trimmed.length === 0) throw new Error("title cannot be empty");
  return { id: 1, title: trimmed };
}

export function formatTask(t) {
  // We'll intentionally edit this line in multiple branches to create conflicts later.
  return `${t.id}: ${t.title}`;
}
