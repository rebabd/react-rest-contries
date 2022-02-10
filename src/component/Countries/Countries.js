import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Country Loaaded : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.alpha2Code}
                        country={country}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;