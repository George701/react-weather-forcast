import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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

        // console.log(this.state.city_redirect);
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

const city_array = [
    "London"
];

const city_countryCode = [
    "uk"
];

function selectCity(city){
    city = String(city);
    console.log(city);
    switch(city){
        case city_array[0]:
            city = String(city_array[0]+","+city_countryCode[0]);
            break;
        default:
            city = "Undefined";
    }
    return city;
}

function checkAndGetCountryCode(city){
    let city_and_code = selectCity(city);
    // console.log(city_and_code);
    if(city_and_code === "Undefined"){
        let city_list = "";
        for(let i = 0; i < city_array.length; i++){
            if(city_array[i] === city_array[city_array.length-1]){
                city_list += city_array[i]+"."
            }else{
                city_list += city_array[i]+", "
            }
        }
        alert("In free trial you may use only this list of cities: "+city_list);
        document.getElementById('city').focus();
        return false;
    }else{
        // return city_and_code;
        return city_and_code;
    }
}

// function handleCityRedirect(city){
//     this.props.history.push(`/geo/${city}`);
// }
//
// Index.propTypes = {
//     history: PropTypes.object.isRequired
// };

export default Index;