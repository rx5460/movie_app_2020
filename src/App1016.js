import React from 'react';

class App extends React.Component{
   
  state = {
    count :0
  };

  add = () => {

    this.setState(current => ({

      count: current.count + 1,

    }));

  };

  add = () => {

    this.setState(current => ({

      count: current.count - 1,     

    }));
    
  };

  componentDidMount() {
  console.log('componentdidmount!!');    
  }
  componentDidUpdate() {
  console.log('componentUpdate');    
  }
  
 render() {
    return (
    <div>
      <h1> I'm class component is:{this.state.count}</h1>
    <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={this.minus}>minus</button>
    </div>    
    );
 }
}
export default App;
