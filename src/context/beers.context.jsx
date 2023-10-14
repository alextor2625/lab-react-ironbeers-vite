import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BeersContext = createContext();

const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <BeersContext.Provider value={{ beers }}>
        {children}
    </BeersContext.Provider>
  );
};

export { BeersContext, BeersProvider };
