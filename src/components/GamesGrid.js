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
        <div className={styles.card}>
          Card!
        </div>
        <div>
          {data ? (
            <pre>{JSON.stringify(data, null, 1)}</pre>
          ) : (
          <CircularProgress />
          )}
        </div>
      </div>
    );
}

export default GamesGrid;