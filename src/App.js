import './App.css';
import DinoList from './Components/DinoList';

function App() {
  return (
    <div className='app-container'>
    <div className='title-box'>
      <h1 className='title-text'>JP Hunt</h1>
      <h2 className='title-text'>A Jurassic Park Dinosaur Search Engine</h2>
    </div>
    
      <DinoList />
    </div>
  );
}

export default App;
