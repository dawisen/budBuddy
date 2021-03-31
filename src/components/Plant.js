import water from "../images/water-drop.jpg"
import sun from "../images/sun.png"
import fertilizer from "../images/fertilizer.png"
import { Link } from "react-router-dom";

const Plant = ({plantId, plants}) => {
    const plant = plants.filter((plant) => plant.id === plantId)[0];

    const onAdd = () => {
        plant.owned = !plant.owned;
        // setPage("My Plants");
    }

    return (
        <div>
            <h1>{plant.name}</h1>
            <h2>Level: {plant.level}</h2>
            
            <h3><img src={water} alt="water" width="50" height="50"/>: {plant.water}</h3>
            <h3><img src={sun} alt="sun" width="50" height="50"/>: {plant.sunlight}</h3>
            <h3><img src={fertilizer} alt="fertilizer" width="50" height="50"/>: {plant.fertilizer}</h3>
            <img src={plant.picture}/>
            <div />
            <Link to="myplants">
            <button onClick={onAdd}>{plant.owned ? "Remove" : "Add"} {plant.name} {plant.owned ? "from" : "to"} My Plants</button>
            </Link>
            
        </div>
    )
}

export default Plant