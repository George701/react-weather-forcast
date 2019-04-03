import React, { Component } from 'react';
import Loader from '../layout/Loader';

class GetCityData extends Component {
    state = {
        location: this.props.location
    };

    componentDidMount(){
        const city = this.state.location;
        console.log(city);
    }

    // shouldComponentUpdate(nextProps){
        // TODO: learn how to rerender component!!!!
    // }

    render(){
        // const { city } = this.props.city;
        // console.log(city);
        // if(city){
        //     return(
        //         <div>
        //             <h1>{this.props.city}</h1>
        //         </div>
        //     )
        // }else{
        //     return <Loader/>
        // }
        return <div>Hello {this.state.location}</div>

    }
}

export default GetCityData;