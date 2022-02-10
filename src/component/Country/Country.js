import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, area, capital, population} = props.country;
    console.log(props);
    return (
        <div className='country bg-success'>
            <h2 className='text-warning'> {name}</h2>
            <img className='flag' src={flag} alt="" /> 
            <p>Area : {area}</p>
            <p>This Capital {capital}, Population: {population}</p>
            <button className='btn btn-danger'>Add country</button>
        </div>
    );
};

export default Country;