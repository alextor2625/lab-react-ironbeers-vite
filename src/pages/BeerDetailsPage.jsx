import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BeersContext } from "../context/beers.context";

function BeerDetailsPage() {
  const { beers } = useContext(BeersContext);
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    let thisBeer = beers.find((beer) => beer._id === beerId);
    console.log("Line 14 - Data:", thisBeer);
    setBeer(thisBeer);
  }, [beerId, beers]);

  if (!beer) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <img src={beer.image_url} alt="" className="details-beer-image" />
      <div className="details-container2">
        <h2>{beer.name}</h2>
        <p>{beer.attenuation_level}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
      </div>
      <div className="details-container3">
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
