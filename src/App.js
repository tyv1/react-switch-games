import './App.css';
import GamesGrid from './components/GamesGrid';
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Switch Games</h1>
      </header>
      <body className="App-body">
        <GamesGrid showMore={showMore} />
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </body>
    </div>
  );
}

export default App;
