import React from 'react';
import {
  CountryStyled,
  CountryWrapperStyled,
  CountryNameStyled,
  CountryTextLineStyled
} from './index.styled';

function Country({ country }) {
  return (
    <CountryStyled>
      <CountryWrapperStyled>
        <CountryNameStyled>
          City name:
        </CountryNameStyled>
        <CountryNameStyled>
          Country:
        </CountryNameStyled>
        <CountryTextLineStyled>
          Weather:
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Temperature:
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Feels like:
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Pressure:
        </CountryTextLineStyled>
        <CountryTextLineStyled>
          Wind speed:
        </CountryTextLineStyled>
      </CountryWrapperStyled>
    </CountryStyled>
  )
}

export default Country