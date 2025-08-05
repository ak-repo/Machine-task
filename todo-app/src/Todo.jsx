// Todo.js
import { Button, Container, Form, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./App.css"; // Make sure to create this CSS file

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [item, setItems] = useState("");

  function addTodo() {
    if (item.trim() !== "") {
      const newTodo = { id: Date.now(), todo: item };
      setTodos([newTodo, ...todos]);
      setItems("");
    }
  }

  function deleteTodo(id) {
    // Apply "fade-out" class first
    const updated = todos.map((t) =>
      t.id === id ? { ...t, fade: true } : t
    );
    setTodos(updated);
    setTimeout(() => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }, 300); // sync with CSS transition
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg rounded-4 animate-card">
        <Card.Header className="bg-dark text-white text-center fs-4">📝 Todo List</Card.Header>
        <Card.Body>
          <Form className="mb-4" onSubmit={(e) => e.preventDefault()}>
            <Row className="g-2 justify-content-center">
              <Col xs={12} sm={8} md={6}>
                <Form.Control
                  type="text"
                  value={item}
                  onChange={(e) => setItems(e.target.value)}
                  placeholder="Enter a task..."
                  className="input-animated"
                />
              </Col>
              <Col xs="auto">
                <Button variant="primary" onClick={addTodo} className="btn-animated">
                  Add Task
                </Button>
              </Col>
            </Row>
          </Form>

          <ListGroup variant="flush">
            {todos.length === 0 && (
              <p className="text-muted text-center">No tasks yet. Start by adding one!</p>
            )}
            {todos.map((todo) => (
              <ListGroup.Item
                key={todo.id}
                className={`d-flex justify-content-between align-items-center fade-in ${todo.fade ? "fade-out" : ""}`}
              >
                <span>{todo.todo}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ✖
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
