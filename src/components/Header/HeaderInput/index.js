import React, { useState } from 'react'
import {
  HeaderInputStyled,
  HeaderInputAreaStyled,
  HeaderInputDropdownStyled,
  HeaderInputDropdownItemStyled
} from './index.styled';

function HeaderInput({ value, setValue, onInputSubmit }) {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const [showDropdown, setShowDropdown] = useState(false);


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
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
      />

      {
        showDropdown ? <HeaderInputDropdownStyled>
          {cities.map(city => (
            <HeaderInputDropdownItemStyled
              key={city}
              onClick={() => setValue(city)}
            >
              {city}
            </HeaderInputDropdownItemStyled>
          ))}
        </HeaderInputDropdownStyled>
          :
          null
      }


    </HeaderInputStyled>


  )
}

export default HeaderInput

