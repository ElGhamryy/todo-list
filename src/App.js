import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddButton = () => {
    const text = inputRef.current.value
    if (text === "")
    {
      return
    }
    const newTodo = {text, completed: false}
    setTodos([...todos, newTodo])
    inputRef.current.value = '';
  }

  const handleTaskDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteButton = (index) => {
    setTodos( () => {
      return todos.filter((todo) => todos.indexOf(todo) !== index)
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <span className='header'>To Do</span>
        <input ref={inputRef} placeholder="Add Task.."/>
        <button className='add-button' onClick={handleAddButton}>Add</button>
        
        <ul>
          {todos.map(({text, completed}, index) => {
            return( 
              <div className='item'>
                <li key={index} className={completed ? "done" : ""} onClick={() => handleTaskDone(index)}>{text}</li>
                <button onClick={() => handleDeleteButton(index)}>❌</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
