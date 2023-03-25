import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SingleArticle from './components/single-article/SingleArticle';

import './App.css';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="news/:id" element={<SingleArticle />} />
    </Routes>
  );
}

export default App;
