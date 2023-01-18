import { useState,  useEffect } from "react";
import { getAllTodos } from "../services/Todo-api";
import Create from "./CreateTodo";


export default function Todos() {
    const [tdList, setTodoList] = useState([])
    useEffect(() => {
        getAllTodos()
        .then(res => setTodoList(res.data))
    }, [])

    console.log(Todos)

return ( 
        <div> 
       <h2> All of the To Do's</h2>
            <ul>
        {tdList.map((todo) => { 
            return( 
            <li><a href={`/${todo._id}`}>{todo.description}</a></li>
              )
            })}
            
        </ul>
            <Create />
        </div>
    )
};