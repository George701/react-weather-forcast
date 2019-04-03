import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getGeo} from '../../actions/weatherActions';

import Loader from '../layout/Loader';

class GetLocal extends Component {

    componentDidMount(){
        const lat = this.props.lat;
        const lon = this.props.lon;

        // console.log(lat, lon);

        this.props.getGeo(lat,lon);
    }

    render() {
        const { data } = this.props;
        if(data){
           const list = data.list;
            if(list){
                return(
                    <div>
                        <h1>Hello Local</h1>
                        <h4>City: <strong>{data.city.name}</strong>, Country: {data.city.country}</h4>
                        <ol>
                            {list.map(w_unit =>
                            <li key={w_unit.dt}>
                                {w_unit.dt_txt}
                            </li>
                                 )}
                        </ol>

                    </div>)
            }else{
                return <Loader/>
            }
        }else{
            return <Loader/>
        }

    }
}

GetLocal.propTypes = {
    // data: PropTypes.array.isRequired,
    getGeo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.weather.data,
});


export default connect(mapStateToProps, {getGeo})(GetLocal);