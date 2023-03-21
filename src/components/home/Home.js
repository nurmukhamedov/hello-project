import { add, mulpitply } from '../helper3';
import ComponentA from '../lesson-50/ComponentA';
import './home.css';

const Home = () => {
    console.log(add(5, 4));
    console.log(mulpitply(5, 4));
    return (
        <>
            <div className='home'>
                <h2 className='title'>Hello world</h2>
            </div>
            <ComponentA />
        </>
    )
}
export default Home;