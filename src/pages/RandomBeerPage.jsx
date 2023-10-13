import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BeersContext } from "../context/beers.context";

function RandomBeerPage() {
    const [foundProject, setFoundProject] = useState(null);
    
    const { beerId } = useParams();
    console.log('Beer Id', beerId);  
   
    useEffect(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random` + beerId)
        .then((response) => {
          setFoundProject(response.data);
        })
      
    }, [beerId]);

  return (
    <div className="details-container">
      <img src={beer.image_url} alt="" className="details-beer-image" />
      <div className="details-container2">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
      </div>
      <div className="details-container3">
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );


}

export default RandomBeersPage;


// The `RandomBeerPage` component should display the following information about the random (same as in the `BeerDetailsPage`):

// - `image`
// - `name`
// - `tagline`
// - `first_brewed`
// - `attenuation_level`
// - `description`
// - `contributed_by`