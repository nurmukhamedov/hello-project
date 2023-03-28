import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextExample';
import { FetchContext } from './FetchContext';
const ComponentB = () => {

    const { counter, setCounter, handleClick } = useContext(MyContext);
    const { data } = useContext(FetchContext);

    console.log(data);


    return (
        <div>
            {counter}

            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default ComponentB