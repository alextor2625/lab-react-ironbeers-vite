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
            <h2>New Beer</h2>
            <img src={newBeerImage} alt="New Beer Image" className='home-img'/>
      </Link>
      </div>
      
      
    </div>
  );
}

export default HomePage;


{/* <div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png" height="600px" />
</div> */}

// - `/beers` - to the "All Beers" page
// - `/random-beer` - to the "Random Beer" page
// - `/new-beer` - to the "New Beer" page