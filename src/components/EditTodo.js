import { editTodo, getTodo } from "../services/Todo-api"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom' 

export default function EditTodo() {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        getTodo(id)
        .then(res => setData(res.data))
    }, [])

    const editTheToDo = e => {
        e.preventDefault()
        const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
        editTodo(id, updatedTodo)
        nav(`/${id}`)
    }
    return (
        <div>
            <form onSubmit={editTheToDo}>
                Description <input type='text' name="description" defaultValue={data.description}/>
                Completion <input type='checkbox' name='complete' defaultChecked={data.complete}/> 
                <input type='submit' />
            </form>
        </div>
    )
}