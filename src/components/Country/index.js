import React from 'react';
import { useSelector } from 'react-redux'
import {
  CountryStyled,
  CountryWrapperStyled,
  CountryNameStyled,
  CountryTextLineStyled,
  CountryWeatcherIconStyled
} from './index.styled';
import { useTranslate } from 'react-redux-multilingual';

function Country() {
  const countryWeather = useSelector(store => store.country.country);
  const translate = useTranslate();
  return (
    <CountryStyled>
      <CountryWrapperStyled>
        <CountryWeatcherIconStyled>
          <img src={`http://openweathermap.org/img/wn/${countryWeather?.weather[0].icon}.png`} alt="" />
        </CountryWeatcherIconStyled>
        <CountryNameStyled>
          {translate('cityName')} {countryWeather?.name}
        </CountryNameStyled>
        <CountryNameStyled>
          {translate('country')} {countryWeather?.sys.country}
        </CountryNameStyled>
        <CountryTextLineStyled>
          {translate('weather')} {countryWeather?.weather[0].main}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          {translate('temperature')} {Math.round(countryWeather?.main.temp)} ℃
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          {translate('feelsLike')} {Math.round(countryWeather?.main.feels_like)} ℃
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          {translate('pressure')} {countryWeather?.main.pressure}
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          {translate('windSpeed')} {countryWeather?.wind.speed} m/s
        </CountryTextLineStyled>
      </CountryWrapperStyled>
    </CountryStyled>
  )
}

export default Country