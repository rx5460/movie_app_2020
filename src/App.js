import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';
function Food({name, images, altText}) {

  return (
      <div>
        <h3> I love{name}</h3>
        <img src = {images} alt ={altText} />
      </div>
  );
}

const foodLink = [
{
  id: 1,
  name: '김치', altText: '피자를 먹는 모습',
  
  image: imgA
},
{
  id: 2,
  name: '피자', 
  
  image: imgB, altText: '피자를 먹는 모습'
  
},
{
  id: 3, altText: '피자를 먹는 모습',
  
  name: '햄버거',
  image: imgC

},{
  id: 5, altText: '피자를 먹는 모습',
  
  name: '햄버거',
  image: imgD

},{
  id: 4,
  name: '햄버거', altText: '피자를 먹는 모습',
  
  image: imgE

}

];

function App() {
    return (
    <div> 

    {foodLink.map(dish => (<Food name = {dish.name}  images = {dish.image} altText= {dish.altText}/>))}

    </div>
    );
  }

export default App;
