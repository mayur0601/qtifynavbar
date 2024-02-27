import { useEffect,useState } from "react"
import axios from "axios";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import Section from './Components/Section/Section';

function App() {
  // const [count, setCount] = useState(0)

  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  const [songData,setSongData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([])
  const [value, setValue] = useState(0);
  const [carouselToggle,setCarouselToggle] = useState(false);

  const handleToggle = () => {
      setCarouselToggle(!carouselToggle);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
    generateSongsData(newValue)
  }

  useEffect(()=>{
    generateSongsData(value);
  },[value]);

  const fetchSongs = async () => {
    try {
      const songs = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongData(songs.data);
       setFilteredDataValues(songs.data);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }

  const generateSongsData = (value) => {
    // let songData = newAlbumSongs[0].songs;
    let key;
    if (value === 0) {
      filteredData(songData);
      return;
    }
    else if (value === 1) {
      key = 'rock'
    }
    else if (value === 2) {
      key = 'pop'
    }
    else if (value === 3) {
      key = 'jazz'
    }
    else if (value === 4) {
      key = 'blues'
    }
    const data = songData.filter((item) => {
      return item.genre.key === key
    });
    filteredData(data);
  }

  const filteredData = (val) => {
    setFilteredDataValues(val);
  }

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setNewAlbumSongs(newAlbumSongs.data);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(()=>{
      async function fetchData(){
          try{
              let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
              setTopAlbumsData(response.data);
          }catch(e){
              console.error(e);
          }
      }
      fetchData();
      generateNewAlbumSongs();
      fetchSongs();
  },[])


  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section title="Top Albums" type="album" data={topAlbumsData} filteredDataValues={topAlbumsData} toggle={carouselToggle} handleToggle={handleToggle}/>
      <Section type='album' title='New Albums' data={newAlbumSongs} filteredDataValues={newAlbumSongs} toggle={carouselToggle} handleToggle={handleToggle}/>
      <Section type='song' title='Songs' data={songData} filteredDataValues={filteredDataValues} toggle={carouselToggle} value={value} handleToggle={handleToggle} handleChange={handleChange}/>
    </div>
  )
}

export default App
