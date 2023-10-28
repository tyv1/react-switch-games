import './App.css';
import fetchData from './utils/fetchData';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        const data = await result.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAsync();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>  
        </div>
      </header>
    </div>
  );
}

export default App;
