import {Link} from 'react-router-dom';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png'; 
import newBeerImage from '../assets/new-beer.png';



function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-page'>
      <Link to='/beers'>
            <h2>All Beers</h2>
            <img src={allBeersImage} alt="All Beers Image" className='home-img'/>
      </Link>
      </div>
      
      <div className='home-page'>
      <Link to='/random-beer'>
            <h2>Random Beers</h2>
            <img src={randomBeerImage} alt="Random Beer Image" className='home-img'/>
      </Link>
      </div>

      <div className='home-page'>
      <Link to='/new-beer'>
            <h2>Add Beer</h2>
            <img src={newBeerImage} alt="New Beer Image" className='home-img'/>
      </Link>
      </div>
      
      
    </div>
  );
}

export default HomePage;