import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countriess = () => {
    const [country, setCountry] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState ([]);

    const [addvisitedflag, setAddvisitedflag] = useState ([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountry(data))
    },[])

    const handleAddedVisitedCountries = (country) => {
        // console.log ('Add this visited Country here');
        // console.log (country);

        const newVisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newVisitedCountries);
       
    }


    const handleAddVisitedFlag = (flag) => {
        console.log ('Hi, Here is flag');
        const newAddflag = [...addvisitedflag, flag];
        setAddvisitedflag(newAddflag);
    }

    return (
        <div >
            <h1>Here is Country Count Total : {country.length} </h1>
            <div>
                <h5> Here is Added Visited Country : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li  key={country.cca3}>
                            {country.name.common}
                                {country.capital}
                            </li>)
                    }
                </ul>
            </div>
            <br />
            <hr />
            <br />

            <div className='flex gap-5'>
                {
                    addvisitedflag.map(flag => <img key={flag} className='h-5 w-15' src={flag}></img>)
                   
                }
            </div>

           <div className='grid lg:grid-cols-3 mt-5 mb-5 gap-3 '>
           {

country.map(country => <Country 
    key={country.cca3} 
    handleAddedVisitedCountries={handleAddedVisitedCountries}
    handleAddVisitedFlag={handleAddVisitedFlag}
    country={country}></Country>)
}
           </div>
        </div>
    );
};

export default Countriess;