import { useLayoutEffect, useState } from 'react';
import Styles from './form.module.css';
export default function Form(){
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo("")
    }
    return (
        <div>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <input 
                    className={Styles.input} 
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    type='submit'
                    className={Styles.button}
                >Add</button>
            </form>
            {
                todos.map((item)=> 
                <ul key={item}>{item}</ul>)
            }
        </div>
        
    )
}