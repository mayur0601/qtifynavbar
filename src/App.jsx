import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import Cards from './Components/Cards/Cards';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Cards/>
    </div>
  )
}

export default App
