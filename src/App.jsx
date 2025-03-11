import { useState } from "react";
import Todo from "./Todo";

function App() {

  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const addTodo = () => {
    if(input === "") return;
    setTodo([...todo, input]);
    setInput("");
  }

  const onComplete = (index) => {
    const newTodo = todo.map((todo, i) => i === index ? {...todo, completed: !todo.completed} : todo);
    setTodo(newTodo);
  }

  const onDelete = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  }
  return (
    <>  
      <div className="container mx-auto mt-10 max-w-[1240px]">
        <h1 className="text-blue-600 text-4xl font-bold text-center md:text-5xl">To-Do App</h1>
      <div className="container mx-auto mt-10 flex justify-center items-center">
        <input type="text" value={input} onChange={handleInput} placeholder="Add a new task" className="w-full md:w-1/2 sm:w-1/2 p-2 rounded-md bg-gray-700 text-white mx-2" />
        <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-800 duration-300 text-white p-2 rounded-md mx-2">Add</button>
      </div>
      <div className="container mx-auto mt-10">
        <Todo todo={todo} onDelete={onDelete} onComplete={onComplete}/>
      </div>
      </div>
    </>
  )
}

export default App
