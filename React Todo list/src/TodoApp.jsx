
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, Card } from 'react-bootstrap';
import './TodoApp.css'; 

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleEditChange = (e) => {
    setEditingTask(e.target.value);
  };

  const handleSaveEdit = (index) => {
    const newTasks = tasks.map((task, i) => (i === index ? editingTask : task));
    setTasks(newTasks);
    setEditingIndex(null);
    setEditingTask('');
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingTask(tasks[index]);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingTask('');
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="bg-light full-height">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow p-4" style={{ width: '100%', maxWidth: '600px' }}>
          <Card.Body>
            <h1 className="text-center mb-4">To-Do App</h1>
            <Form onSubmit={handleAddTask}>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter a task"
                  value={task}
                  onChange={handleInputChange}
                />
                <Button variant="primary" type="submit">
                  Add Task
                </Button>
              </InputGroup>
            </Form>
            <ListGroup className="mt-4">
              {tasks.map((task, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  {editingIndex === index ? (
                    <>
                      <Form.Control
                        type="text"
                        value={editingTask}
                        onChange={handleEditChange}
                        className="me-2"
                      />
                      <Button variant="success" onClick={() => handleSaveEdit(index)} className="me-2">
                        Save
                      </Button>
                      <Button variant="secondary" onClick={handleCancelEdit}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      {task}
                      <div>
                        <Button variant="warning" onClick={() => handleEditTask(index)} className="me-2">
                          Edit
                        </Button>
                        <Button variant="danger" onClick={() => handleRemoveTask(index)}>
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default TodoApp;
