import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Error from '../error/Error';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import SingleAbout from '../single-about/SingleAbout';

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/error-404" element={<Error />} />
                <Route path='*' element={<Navigate to='/error-404' />} />
                <Route path='/about/:id' element={<SingleAbout />} />
            </Routes>
            <Footer />
        </>

    )
}

export default Routing