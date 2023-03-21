import { useState } from "react";

const ToDo = () => {

    const [todo, setTodos] = useState(() => {

        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [newTodo, setNewTodo] = useState('');

    const handleChangeEvent = (event) => {
        setNewTodo(event.target.value);
        console.log(event.target.value);
    }

    const handleChangeSubmit = (event) => {
        event.preventDefault();

        if (!newTodo.trim()) return;
        setTodos([...todo, {
            id: Date.now(),
            text: newTodo,
            name: 'Zafar'
        }]);

        setNewTodo('')
    }
    localStorage.setItem('todos', JSON.stringify(todo));

    const handleDelete = (id) => {
        const updateTodo = todo.filter((item) => item.id !== id);
        setTodos(updateTodo);
    }
    return (
        <div>
            <h1>To Do App</h1>

            <form onSubmit={handleChangeSubmit}>
                <input type="text" value={newTodo} onChange={handleChangeEvent} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    todo.map((element) => (
                        <li key={element.id}>
                            <span>{element.text}</span>
                            <button onClick={() => handleDelete(element.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDo