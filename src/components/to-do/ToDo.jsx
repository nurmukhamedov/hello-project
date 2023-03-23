import { useState } from "react";
import './ToDo.scss';
import { useTranslation } from "react-i18next";


const ToDo = () => {
    const { t } = useTranslation();

    const [todo, setTodos] = useState(() => {

        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [newTodo, setNewTodo] = useState('');
    const [editingToDo, setEditingToDo] = useState(null);

    const handleChangeEvent = (event) => {
        setNewTodo(event.target.value);
        console.log(event.target.value);
    }

    const handleChangeSubmit = (event) => {
        event.preventDefault();

        if (!newTodo.trim()) return;

        if (editingToDo !== null) {
            const updateToDo = todo.map((todo) => {
                if (todo.id === editingToDo) {
                    return { ...todo, text: newTodo }
                } else {
                    return todo
                }
            });

            setTodos(updateToDo);
            setEditingToDo(todo);
            setNewTodo('');


        } else {
            const newTodos = {
                id: Date.now(),
                text: newTodo
            }
            setTodos([...todo, newTodos]);
            setNewTodo('');
        }
    }
    localStorage.setItem('todos', JSON.stringify(todo));

    const handleDelete = (id) => {
        const updateTodo = todo.filter((item) => item.id !== id);
        setTodos(updateTodo);
    }
    const handleUpdate = (id) => {
        const toDoEdit = todo.find((todo) => todo.id === id);
        setEditingToDo(id);
        setNewTodo(toDoEdit.text)
    }
    return (
        <div className="todo-app">
            <h1>{
                t("to-do")
            }</h1>

            <form onSubmit={handleChangeSubmit}>
                <input type="text" value={newTodo} onChange={handleChangeEvent} />
                <button type="submit">{
                    editingToDo !== null ? 'Save' : t("button-text")

                }</button>
                {
                    editingToDo !== null && (
                        <button type="submit" onClick={() => setEditingToDo(null)}>Cancel</button>
                    )
                }
            </form>
            <ul>
                {
                    todo.map((element) => (
                        <li key={element.id}>
                            <span>{element.text}</span>
                            <button onClick={() => handleDelete(element.id)}>Delete</button>
                            <button onClick={() => handleUpdate(element.id)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDo