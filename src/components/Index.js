import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import cities from '../known_city/city.list';
import cities from '../known_city/citylist';

class Index extends Component {
    state = {
        redirect: false,
        city_redirect: ""
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/city/${this.state.city_redirect}`} />
        }
    };


    render() {

        this.handleKeyEnter = (e) => {
            if(e.key === 'Enter'){
                let city = document.getElementById('city').value;
                if(city !== ""){
                    let redirect_city = checkAndGetCountryCode(city);
                    if (redirect_city !== false){
                        // console.log(redirect_city);
                        this.setState({city_redirect: redirect_city});
                        this.setRedirect();
                    }
                }else{
                    alert("You didn't select any city! Please type the name of the city");
                }
            }
        };

        this.onClick = () => {
            let city = document.getElementById('city').value;
            if(city !== ""){
                let redirect_city = checkAndGetCountryCode(city);
                if (redirect_city !== false){
                    // console.log(redirect_city);
                    this.setState({city_redirect: redirect_city});
                    this.setRedirect();
                }
            }else{
                alert("You didn't select any city! Please type the name of the city");
            }
        };

        return (
            <div className="index-container">
                <div className="index-content">
                    <div className="index-row">
                        <input type="text" name="city_name" id="city" placeholder="City" onKeyPress={this.handleKeyEnter}/>
                        <button id="city-search" onClick={this.onClick}>
                            {this.renderRedirect()}
                            <i className="fas fa-search"/>
                        </button>
                    </div>

                    <div className="index-row">or</div>

                    <div className="index-row">use my{' '}
                        <Link to="/geo" className="geo-position">
                            current position
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


function selectCity(city){
    city = String(city);

    let c_code = "Undefined";

    for(let i = 0; i < cities.length; i++){
        if(cities[i].name === city){
            c_code = String(cities[i].name+","+cities[i].country);
            console.log("Founded!" + c_code);
            return c_code;
        }
    }
    return c_code;
}

function checkAndGetCountryCode(city){
    let city_and_code = selectCity(city);
    if(city_and_code === "Undefined"){
        alert("Looks like there is no such city in database, Sorry:)");
        document.getElementById('city').focus();
        return false;
    }else{
        return city_and_code;
    }
}


export default Index;