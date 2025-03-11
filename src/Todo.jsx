

export default function Todo({todo, onDelete}) {
  return (
    <ul className="text-white">
       {todo.map((todo, index) => (
        <li key={index} className="flex justify-between items-center">
            <span className="text-2xl text-gray-300 font-bold mx-3 my-4">{todo}</span>
            <button onClick={() => onComplete(index)} className="bg-green-500 hover:bg-green-800 duration-300 text-white p-2 rounded-md mx-3 my-4">Complete</button>
            <button onClick={() => onDelete(index)} className="bg-red-500 hover:bg-red-800 duration-300 text-white p-2 rounded-md mx-3 my-4">Delete</button>
        </li>
       ))}
    </ul>
  )
}
