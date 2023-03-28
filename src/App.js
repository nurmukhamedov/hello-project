import './App.css';
import Home from './components/home/Home';

function App() {

  const firstName = 'Muhammadrasul';
  return (
    <div>
      <Home name={firstName} />
    </div>
  );
}

export default App;
