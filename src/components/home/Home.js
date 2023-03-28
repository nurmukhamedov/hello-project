import ComponentB from '../lesson54/ComponentB';
import { useContext } from 'react';
import { MyContext } from '../lesson54/ContextExample';
import { FetchContext } from '../lesson54/FetchContext';
import './home.css';

const Home = (props) => {

    const { counter, handleClick } = useContext(MyContext);
    const { data } = useContext(FetchContext);

    console.log(data);
    return (
        <>
            <div>
                {counter}
            </div>
            <ComponentB name={props.name} />
        </>
    )
}
export default Home;