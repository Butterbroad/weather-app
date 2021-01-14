import React from 'react';
import { useSelector } from 'react-redux'
import {
  CountryStyled,
  CountryWrapperStyled,
  CountryNameStyled,
  CountryTextLineStyled
} from './index.styled';

function Country() {
  const countryWeather = useSelector(store => store.country.country)
  return (
    <CountryStyled>
      <CountryWrapperStyled>
        <CountryNameStyled>
          City name: {countryWeather?.name}
        </CountryNameStyled>
        <CountryNameStyled>
          Country: {countryWeather?.sys.country}
        </CountryNameStyled>
        <CountryTextLineStyled>
          Weather: {countryWeather?.weather[0].main}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Temperature: {countryWeather?.main.temp}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Feels like: {countryWeather?.main.feels_like}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Pressure: {countryWeather?.main.pressure}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Wind speed: {countryWeather?.wind.speed}
        </CountryTextLineStyled>
      </CountryWrapperStyled>
    </CountryStyled>
  )
}

export default Country