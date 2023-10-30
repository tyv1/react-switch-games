import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { CircularProgress, Divider } from "@mui/material";
import styles from './GamesGrid.module.css';

function GamesGrid({showMore}) {
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

    const dataToShow = showMore ? data : (data ? data.slice(0, 10) : []);

    return (
      <div className={styles.wrapper}>
        {dataToShow ? (
          dataToShow.map((game, index) => (
            <div key={index} className={styles.card}>
              <h3>
                {game.name}
              </h3>
              <Divider variant="middle" sx={{ bgcolor: "#B4CDED" }}/>
              <p>
                <bold>Genre:</bold> {game.genre}
              </p>
              <Divider light variant="middle" sx={{ bgcolor: "#B4CDED", opacity: "25%", width: "50%", alignSelf: "center"}}/>
              <p>
                <bold>Developed by:</bold> {game.developers}
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