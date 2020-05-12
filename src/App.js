import React from 'react';
import { useState } from 'react';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Header from './components/layout/Header';

import{v4 as uuidv4} from 'uuid';


import './App.css';

const startingState = [
  {
    id: uuidv4(),
    title: 'Go shopping',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Cook Dinner',
    completed: true
  },
  {
    id: uuidv4(),
    title: 'Read a book',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Practice React',
    completed: true
  }
];

function App() {

  const [todos, setTodos] = useState(startingState);


  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleAdd = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }


  return (
    <div className="App">
      <div className='container'>
        <Header />
        <AddTodo onAddTodo={handleAdd} />
        <Todos todos={todos} onHandleComplete={handleComplete} onHandleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
