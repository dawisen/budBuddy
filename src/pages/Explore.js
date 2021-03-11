import PlantList from "../components/PlantList"
import SearchBar from "../components/SearchBar"

const Explore = ({plants, setPlantId, setPage, handleSearch}) => {
    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            <PlantList plantData={plants} page="Explore" setPlantId={setPlantId} setPage={setPage}/>
        </div>
    )
}

export default Explore