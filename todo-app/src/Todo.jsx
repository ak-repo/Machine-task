import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [item, setItems] = useState("");

  function addTodo() {
    if (item.trim() !== "") {
      setTodos([{ id: Date.now(), todo: item }, ...todos]); 
      setItems("");
      console.log(todos)
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo">
      <form className="form">
        <input
          type="text"
          value={item}
          onChange={(e) => setItems(e.target.value)}
          name="todo"
        />
        <Button variant="success" type="button" className="add-btn" onClick={addTodo}>
          ADD-TASK
        </Button>
      </form>

      <div className="box">
        <ul className="display-ul">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <Button 
              className="del-btn"
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                X
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
