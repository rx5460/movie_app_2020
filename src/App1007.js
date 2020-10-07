import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';
import PropTypes from 'prop-types';
function Food({name, images, altText, rating}) {

  return (
      <div>
        <h3> I love{name}</h3>
        <h4> {rating}/5.0</h4>
        <img src = {images} alt ={altText} />
      </div>
  );
}

const foodLink = [
{
  id: 1,
  name: '김치', altText: '피자를 먹는 모습',
  
  image: imgA,
  rating: 5
},
{
  id: 2,
  name: '피자', 
  
  image: imgB, altText: '피자를 먹는 모습',
  
  rating: 4
},
{
  id: 3, altText: '피자를 먹는 모습',
  
  name: '햄버거',
  image: imgC,

  rating: 3
},{
  id: 5, altText: '피자를 먹는 모습',
  
  name: '햄버거',
  image: imgD,

  rating: 3
},{
  id: 4,
  name: '햄버거', altText: '피자를 먹는 모습',
  
  image: imgE,

  rating: 2
}

];

function App() {
    return (
    <div> 

    {foodLink.map(dish => (<Food name = {dish.name} 
     images = {dish.image} altText= {dish.altText} rating = {dish.rating}/>
     ))}
    </div>
    );
  }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App;
