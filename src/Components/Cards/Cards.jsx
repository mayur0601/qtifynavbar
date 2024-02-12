import { useEffect,useState } from "react"
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import style from "./Cards.module.css";

const Cards = () => {

    let [songs,setSongs] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
                console.log(response);
                setSongs(response.data);
            }catch(e){
                console.error(e);
            }
        }
        fetchData();
    },[])

    let songAlbum = songs.map(song =>{
        return (
            <Grid item key={song.id} xs={2}>
            <Card image={song?.image} followers={song?.follows} title={song?.title}/>
            </Grid>
        )
    })

  return (
    <Box sx={{ flexGrow: 1 }} style={{marginLeft:'10px'}}>
        <div className={style.albumHeader}>
            <h3 className={style.albumTitle}>Top Albums</h3>
            <h3 className={style.showTitle}>Show all</h3>
        </div>
        <Grid container spacing={2}>
            {songAlbum}
        </Grid>

    </Box>
  )
}

export default Cards