import React from 'react'

const getWeather = async(id) =>{

    const key = 'CXhPk82ZAZgV0ngVUWdVBVGePc4qMGqf';

    const url = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    const response = await fetch(url+query);
    const data = await response.json();
    return data[0];
}

export default getWeather
