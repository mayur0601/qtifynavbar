import { useEffect,useState } from "react"
import axios from "axios";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import Section from './Components/Section/Section';

function App() {
  // const [count, setCount] = useState(0)

  const [topAlbumsData,setTopAlbumsData] = useState([]);

  useEffect(()=>{
      async function fetchData(){
          try{
              let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
              console.log(response);
              setTopAlbumsData(response.data);
          }catch(e){
              console.error(e);
          }
      }
      fetchData();
  },[])

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section data={topAlbumsData} title={"Top Albums"} type="album"/>
    </div>
  )
}

export default App
