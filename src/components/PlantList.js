import React from "react";
import "./PlantList.css";
import { Link } from "react-router-dom";

export const PlantList = ({ plantData, page, setPlantId}) => {
  const onClickPlant = (id) => {
    setPlantId(id);
    // setPage("Plant");
  };

  const sizeOfImgs = 200;

  return (
    <div className="list">
      <h1>{page}</h1>
      {page === "My Plants" ? (
        <ul className="plant-items">
          {plantData.length ? (
            plantData
              .filter((plant) => plant.owned === true)
              .map((plant) => {
                const { id, name, picture } = plant;
                return (
                  <div className="plant-item" key={id}>
                    <Link to="/plantinfo" onClick={() => onClickPlant(id)}>
                        <img
                          src={picture}
                          className="figure-img img-fluid rounded mx-auto"
                          width={sizeOfImgs}
                          height={sizeOfImgs}
                        ></img>
                    </Link>
                    <h3 className="figure-caption mx-auto">{name}</h3>
                  </div>
                );
              })
          ) : (
            <p>No Results to Display</p>
          )}
        </ul>
      ) : (
        <ul className="plant-items">
          {plantData.length ? (
            plantData.map((plantData) => {
              const { id, name, picture } = plantData;
              return (
                <div className="plant-item" key={id}>
                  <Link to="/plantinfo" onClick={() => onClickPlant(id)}>
                    <img
                      src={picture}
                      width={sizeOfImgs}
                      className="figure-img img-fluid rounded me-1"
                      height={sizeOfImgs}
                    ></img>
                   </Link>
                  <h3 className="figure-caption">{name}</h3>
                </div>
              );
            })
          ) : (
            <p>No Results to Display</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default PlantList;
