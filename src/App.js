import React from 'react';

function Food({fav}) {

  return (
    <h3> I love Poatato {fav}</h3>
  );
}

function App() {

    return (
    <div> 
     <h1> hello!
        <Food fav="김치" /> 
        <Food fav="김치" />
        </h1>
    </div>
    );
  }

export default App;
