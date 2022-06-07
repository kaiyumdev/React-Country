import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags, population, region, area} = props.country;
    return (
        <div className="country">
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <h5>Area: {area}</h5>
        </div>
    );
};

export default Country;