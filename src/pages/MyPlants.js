import PlantList from "../components/PlantList"
import SearchBar from "../components/SearchBar"

const MyPlants = ({plants, setPlantId, setPage, handleSearch}) => {
    return (
        <div>
        <SearchBar handleSearch={handleSearch}/>
        <PlantList plantData={plants} page="My Plants" setPlantId={setPlantId} setPage={setPage}/>
        </div>
    )
}

export default MyPlants