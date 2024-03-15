import React, { useState } from 'react';

const Country = ({country, handleAddedVisitedCountries, handleAddVisitedFlag }) => {
    // console.log(country);
const {name, capital, flags, timezones, population, area } = country;

        const [visited, setVisited] = useState(false);
        const handleVisited = () => {
          setVisited(!visited);
}

    // console.log(handleAddedVisitedCountries);

    return (
       <div className='px-5'>
        <button  className='bg-green-500 hover:bg-red-700 py-3 px-5 rounded-md mt-5 mt' onClick={() => handleAddVisitedFlag(country.flags.png)}>Add Visited Country flag</button>
         <br />
         <hr />
         
         <div className="card w-96 bg-base-100 shadow-xl">
         
  <figure><img src={flags.png} alt="Shoes" /></figure>
  <div className="card-body py-5 px-4">
    <h2 className="card-title"> Name : {name.common}
      <div className="badge badge-secondary"> Capital : {capital}</div>
    </h2>
    <p> Population : {population}</p>
    <p> Area : {area}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> Official Name : {name.official}</div> 
      <div className="badge badge-outline"> Timezones : {timezones}</div>
    </div>
    <br />
    <hr />
    <div className='flex justify-between'>
    <button className='bg-green-500 hover:bg-red-700 py-3 px-5 rounded-md mt-5'>Learn More</button>
    <button style={{color: visited ? 'red' : 'green'}} onClick={handleVisited} className='bg-green-500 hover:bg-red-700 py-3 px-5 rounded-md mt-5'>{visited ? 'Visited Country' : 'Going Country'}</button>
    

    </div>
    <div className='flex justify-end text-red'>{visited && 'I have visited this country'}</div>
    {/* <div className='flex justify-end text-red'>{visited ? 'I have visited this country' : 'I want to visited'}</div> */}
  </div>
  <br />
  <hr />
  <button  className='bg-green-500 hover:bg-red-700 py-3 px-5 rounded-md mt-5' onClick={() => handleAddedVisitedCountries(country)}>Add Visited Country</button>
</div>
       </div>
    );
};

export default Country;