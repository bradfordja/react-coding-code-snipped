import React, { useState } from "react";
export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
    };
    setTodos((previous) => [...previous, newTodo]);
    setText("");
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
/*
Why this version is better

During a senior React interview, you can explain:

* ✅ Uses a controlled component (useState).
* ✅ Uses immutable state updates.
* ✅ Uses the functional form of setState, avoiding stale state issues.
* ✅ Uses unique IDs instead of array indexes.
* ✅ Validates user input.
* ✅ Keeps the component simple, readable, and scalable.

This is the version I would write in a senior React interview because it follows React best practices.
*/