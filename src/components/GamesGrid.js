import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

function GamesGrid() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchGameData() {
          try {
            const result = await fetchData();
            const jsonData = await result.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchGameData(); 
      }, []);

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default GamesGrid;