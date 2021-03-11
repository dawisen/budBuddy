import './App.css';
import {plants} from './data.json'
import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"
import Plant from "./components/Plant"

function App() {
  const [plantId, setPlantId] = useState(-1);
  const [page, setPage] = useState([]);
  // const [listedPlants, setListedPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
   useEffect(() => {
     setFilteredPlants(plants)
     setPage("Home")
   }, []);
  
  const handleSearch = (search) => {
    const plantFilter = plants.filter((plant) => {
      if (
        plant.name.toLowerCase().includes(search.toLowerCase()) ||
        plant.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return plant;
      }
    });
    setFilteredPlants(plantFilter);
    
  };
  return (
    <div className="App">
      <NavBar setPage={setPage}></NavBar>
      { page === "Home" ? <Main setPage={setPage} />
        : page === "Plant" ? <Plant plantId={plantId} plants={filteredPlants} setPage={setPage} />
          : page === "My Plants" ? <MyPlants handleSearch={handleSearch} plants={plants} setPlantId={setPlantId} setPage={setPage} />
            : <Explore handleSearch={handleSearch} plants={filteredPlants} setPlantId={setPlantId} setPage={setPage}/>
      }
    </div>
  );
}

export default App;
