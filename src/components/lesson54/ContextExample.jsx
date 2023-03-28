import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <MyContext.Provider value={{ counter, setCounter, handleClick }}>
            {children}
        </MyContext.Provider>
    )

}