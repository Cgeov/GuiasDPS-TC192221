import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos,setTodos]= useState([])
    
    const handleChange = e => setTodo(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleClick = e => {
        if(Object.keys(todo).length===0||todo.todo.trim()===''){
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos,todo])
        console.log(Object.keys(todo))
    }

    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return(
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <label>Agregar Tarea</label><br/>
                <input placeholder="Cantidad"  type="text" name="todo" required onChange={handleChange} value={todo.todo || ''}/>
                <input placeholder="Objeto" type="text" name="todo1" required onChange={handleChange} value={todo.todo1 || ''}/>
                <button onClick={handleClick}>Agregar</button>
            </form>
        {
            todos.map((value,index)=>(
            <Todo todo={value.todo} toda={value.todo1} key={index} index={index} deleteTodo={deleteTodo}/>
            ))
        }
        </>
    )
}

export default Form