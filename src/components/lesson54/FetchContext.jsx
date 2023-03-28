import { createContext, useState, useEffect } from "react";

export const FetchContext = createContext();

export const CountryProvider = ({ children }) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((info) => setData(info)).catch((error) => console.error(error));
    }, []);

    return (
        <FetchContext.Provider value={{ data }}>
            {children}
        </FetchContext.Provider
    )

}