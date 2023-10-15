import { useContext, useState } from "react";
import { BeersContext } from "../context/beers.context";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

function AllBeersPage() {
 const {beers} = useContext(BeersContext)
 const [search, setSearch] = useState('');

 let filtered = search? beers.filter((beer) => beer.name.toLowerCase().includes(search.toLowerCase())) : beers;


  return (
    <div>
      <h1>All beers page</h1>
        <SearchForm setSearch={setSearch} />
      <div className="beers-container">
      {filtered.map((beer) => {
        return (
            <div className="beers-container2">
              <Link to={`/beers/${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt="Beer image"
                  className="beers-image"
                />
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
          </div>
        );
    })}
    </div>
    </div>
  );
}

export default AllBeersPage;
