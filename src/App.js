import './App.css';
import fetchData from './utils/fetchData';


function App() {
  const data = fetchData();
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
