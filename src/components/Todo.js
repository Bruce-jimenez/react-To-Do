import {useState, useEffect} from "react"
import { getTodo, deleteTodo } from "../services/Todo-api"
import { useParams, useNavigate} from 'react-router-dom'

export default function Todo() {
  const nav =useNavigate()
  const {id} = useParams()
  const [todo, setTodo] = useState({})
  
  useEffect(() => {
    getTodo(id)
    .then(res => setTodo(res.data))}, [])

const deleteTheToDo = () => {
    
    //Delete Function here
    deleteTodo(id);
    //Goes back to the main page
    nav('/');
}
    
  return (
    <div > 
   <h1>Todo:</h1>
   <h3>{todo.description}</h3>
   Completed: <input type='checkbox' defaultChecked={todo.complete} />

   <button onClick={() => {nav(`/${id}/edit`)}}>To Edit</button>

   <button onClick={deleteTheToDo}>Delete The To Do</button>

   <button onClick={() => {nav('/')}}>Return To Main</button>

    </div>
  )
}



