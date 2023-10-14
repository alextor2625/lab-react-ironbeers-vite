import { useState, useEffect, useContext } from "react";
import { BeersContext } from "../context/beers.context";

function RandomBeerPage() {
  const { beers } = useContext(BeersContext);
  const [randombeer, setRandomBeer] = useState(null);
  useEffect(() => {
    let thisRandomBeer = beers[Math.floor(Math.random()*beers.length)]
    console.log("Random Beer", thisRandomBeer);
    setRandomBeer(thisRandomBeer);
  }, [beers]);

  if (!randombeer) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <img src={randombeer.image_url} alt="" className="details-beer-image" />
      <div className="details-container2">
        <h2>{randombeer.name}</h2>
        <p>{randombeer.attenuation_level}</p>
        <p>{randombeer.tagline}</p>
        <p>{randombeer.first_brewed}</p>
      </div>
      <div className="details-container3">
        <p>{randombeer.description}</p>
        <p>{randombeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
