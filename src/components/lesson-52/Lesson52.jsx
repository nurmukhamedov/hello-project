import { useState, useEffect } from 'react';

import axios from 'axios';

const Lesson52 = () => {
    const [text, setText] = useState('posts');
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${text}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData()
    }, [text]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <button onClick={() => setText('posts')}>Posts</button>
            <button onClick={() => setText('users')}>Users</button>
            <button onClick={() => setText('comments')}>Comments</button>
            <p>{text}</p>
            <ul>
                {
                    data.map((element) => (
                        <li key={element.id}>{element.title}
                            <span>{element.id}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Lesson52