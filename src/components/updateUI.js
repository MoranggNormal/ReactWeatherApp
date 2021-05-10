import React from 'react'

const updateUI = ({setDegree, setCondition, setCurTime, setCurCity, setCurMeridiem}, data) => {
    const cityDetail = data.cityName;
    const weatherDetail = data.weatherDetail;
    setDegree(weatherDetail.Temperature.Metric.Value);
    setCondition(weatherDetail.WeatherText);

    //from weather condition we will get timestamp
    //So we have to convert it into real time
    const timestamp = weatherDetail.LocalObservationDateTime;
    const now = new Date(timestamp);
    setCurTime(now.toLocaleDateString());
    setCurCity(cityDetail.EnglishName);
    if (weatherDetail.IsDayTime) {
      setCurMeridiem("Dia");
    } else {
      setCurMeridiem("Noite");
    }
  };

export default updateUI
