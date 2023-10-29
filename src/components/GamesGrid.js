import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { CircularProgress } from "@mui/material";
import styles from './GamesGrid.module.css';

function GamesGrid() {
    const [data, setData] = useState(null);

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
      <div className={styles.wrapper}>
        {data ? (
          data.map((game, index) => (
            <div key={index} className={styles.card}>
              <h3>
                {game.name}
              </h3>
              <p>
                Genre: {game.genre}
                Developed by: {game.developers}
              </p>
            </div>
          ))
        ) : (
        <CircularProgress />
        )}
      </div>
    );
}

export default GamesGrid;