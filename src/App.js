import './App.css';
import {plants} from './data.json'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Main from "./pages/Main"
import MyPlants from './pages/MyPlants'
import Explore from "./pages/Explore"
import Plant from "./components/Plant"

function App() {
  const [plantId, setPlantId] = useState(-1);
  const [filteredPlants, setFilteredPlants] = useState([]);
   useEffect(() => {
     setFilteredPlants(plants)
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
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/plantinfo">
            <Plant plantId={plantId} plants={filteredPlants} />
            </Route>
          <Route exact path="/myplants">
            <MyPlants handleSearch={handleSearch} plants={plants} setPlantId={setPlantId} />
          </Route>
          <Route exact path="/explore">
            <Explore handleSearch={handleSearch} plants={filteredPlants} setPlantId={setPlantId} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
