import React, { useState } from 'react'
import {
  HeaderInputStyled,
  HeaderInputAreaStyled,
  HeaderInputDropdownStyled,
  HeaderInputDropdownItemStyled
} from './index.styled';

function HeaderInput({ value, setValue, onInputSubmit }) {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];

  return (
    <HeaderInputStyled>
      <HeaderInputAreaStyled
        type="text"
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter" && value) {
            onInputSubmit()
          }
        }}
        value={value}
      />

      <HeaderInputDropdownStyled>
        {cities.map(city => (
          <HeaderInputDropdownItemStyled
            key={city}
            onClick={() => setValue(city)}
          >
            {city}
          </HeaderInputDropdownItemStyled>
        ))}
      </HeaderInputDropdownStyled>
    </HeaderInputStyled>


  )
}

export default HeaderInput

