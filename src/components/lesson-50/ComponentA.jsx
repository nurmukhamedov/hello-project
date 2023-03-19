import { useState } from "react";

import ComponentB from "./ComponentB";

import './component.scss';


const ComponentA = () => {
    const [count, setCount] = useState(0);

    const [color, setColor] = useState(false);


    const handleCount = () => {
        return setCount(count + 1)
    }

    const changeColor = () => {
        return setColor(!color)
    }

    const myName = 'Muhammadrasul';

    return (
        <div>
            <h1>Component A</h1>
            <h1>Count{count}</h1>
            <button onClick={handleCount}>+</button>
            <button>-</button>
            <ComponentB name={myName} />

            <p className={`text ${color ? 'danger' : ""}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla ut fuga iste nemo aspernatur explicabo veniam illo, repellendus sit quae doloremque aliquam illum, eaque velit, neque perspiciatis quasi atque unde ipsum saepe culpa nostrum dignissimos voluptatem! Maiores neque porro beatae. Accusamus maiores nostrum expedita sed eveniet a modi magni.</p>
            <button onClick={changeColor} className="change__color">Change color</button>
        </div>
    )
}

export default ComponentA;