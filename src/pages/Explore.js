import PlantList from "../components/PlantList"
import SearchBar from "../components/SearchBar"

const Explore = ({plants, setPlantId, handleSearch}) => {
    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            <PlantList plantData={plants} setPlantId={setPlantId}/>
        </div>
    )
}

export default Explore