import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [beerName, setBeerName] = useState("");
  const [beerTagline, setBeerTagline] = useState("");
  const [beerDescription, setBeerDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [beerAttenuationLevel, setBeerAttenuationLevel] = useState(0);
  const [contributed, setContributed] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const body = {
      name: beerName,
      tagline: beerTagline,
      description: beerDescription,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: beerAttenuationLevel,
      contributed_by: contributed,
    };
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log("New Beer", response);
        setBeerName("");
        setBeerTagline("");
        setBeerDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setBeerAttenuationLevel(0);
        setContributed("");

        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>

      <form className='add-beer-form' onSubmit={handleSubmit}>
        <div className="label-input">
          <label htmlFor="name">Name </label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={beerName}
            onChange={(e) => setBeerName(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="tagline">Tagline </label>
          <input
            className="input-box"
            type="text"
            name="tagline"
            value={beerTagline}
            onChange={(e) => setBeerTagline(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="description">Description </label>
          <input
            className="input-box input-description"
            type="text"
            name="description"
            value={beerDescription}
            onChange={(e) => setBeerDescription(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="first_brewed">First Brewed </label>
          <input
            className="input-box"
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="brewers_tips">Brewer's Tips </label>
          <input
            className="input-box"
            type="text"
            name="brewers_tips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="attenuation_level">Attenuation Level </label>
          <input
            className="input-box"
            type="number"
            name="attenuation_level"
            value={beerAttenuationLevel}
            onChange={(e) => setBeerAttenuationLevel(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label htmlFor="contributed_by">Contributed By </label>
          <input
            className="input-box"
            type="text"
            name="contributed_by"
            value={contributed}
            onChange={(e) => setContributed(e.target.value)}
          />
        </div>
        <button type="submit">ADD BEER</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
