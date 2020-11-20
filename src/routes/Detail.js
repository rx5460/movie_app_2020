
import React from 'react';
import './Detail.css';
class Detail extends React.Component {

  

    componentDidMount() {
        const {location,history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        
        if(location.state){
        return <div className="detail_out">
        <img src ={location.state.poster}></img>
            <h1>{location.state.title}</h1>
            <h2>{location.state.year}</h2>
            <h3>{location.state.genres}</h3>
            <h3>{location.state.rating}</h3>
            </div>
        } else {
            return null
        }
        
    }
    
}

export default Detail;