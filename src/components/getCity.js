import React from 'react'

const getCity = async(city) =>{

    const key = 'CXhPk82ZAZgV0ngVUWdVBVGePc4qMGqf';

    const url = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(url+query);
    const data = await response.json();
    return data[0];

}

export default getCity
