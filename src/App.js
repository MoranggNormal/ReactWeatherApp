import React from "react";
import getCity from "./components/getCity";
import getWeather from "./components/getWeather";
import updateUI from "./components/updateUI";
import "./App.css";

function App() {
  const [city, setCity] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [curTime, setCurTime] = React.useState("");
  const [curCity, setCurCity] = React.useState("");
  const [curMeridiem, setCurMeridiem] = React.useState("");

  const updateCity = async (city) => {
    const cityName = await getCity(city);

    const weatherDetail = await getWeather(cityName.Key);

    return { cityName, weatherDetail };
  };

  function handleChange({ target }) {
    setCity(target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    city.trim();

    updateCity(city)
      .then((data) =>
        updateUI(
          { setDegree, setCondition, setCurTime, setCurCity, setCurMeridiem },
          data
        )
      )
      .catch((err) => {
        console.log(alert("Please enter a valid city name"));
        console.log("could not fetch the data", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} name="city" onChange={handleChange} />
      <button type="submit">Enviar</button>
      <p>{curCity}</p>
      <p>{curTime}</p>
      <p>{degree}</p>
      <p>{condition}</p>
      <p>{curMeridiem}</p>
    </form>
  );
};

export default App;
