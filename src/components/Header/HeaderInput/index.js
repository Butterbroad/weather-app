import React, { useEffect, useState } from 'react'
import {
  HeaderInputStyled,
  HeaderInputAreaStyled,
  HeaderInputDropdownStyled,
  HeaderInputDropdownItemStyled
} from './index.styled';

function HeaderInput({ value, setValue, onInputSubmit }) {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const [showDropdown, setShowDropdown] = useState(false);
  const [result, setResult] = useState([])

  useEffect(() => {
    setResult(cities)
  }, []);


  return (
    <HeaderInputStyled>
      <HeaderInputAreaStyled
        type="text"
        onChange={e => {
          setValue(e.target.value);
          setResult(cities.filter(elem => elem.toLowerCase().includes(e.target.value.toLowerCase())))
        }}
        onKeyPress={e => {
          if (e.key === "Enter" && value) {
            onInputSubmit()
          }
        }}
        value={value}
        onFocus={() => {
          setShowDropdown(true)
          value &&
            setResult(cities.filter(elem => elem.toLowerCase().includes(value.toLowerCase())))
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
      />

      {
        showDropdown && !!result.length && <HeaderInputDropdownStyled>
          {result.map(city => (
            <HeaderInputDropdownItemStyled
              key={city}
              onClick={() => setValue(city)}
            >
              {city[0].toUpperCase() + city.slice(1)}
            </HeaderInputDropdownItemStyled>
          ))}
        </HeaderInputDropdownStyled>
      }


    </HeaderInputStyled>


  )
}

export default HeaderInput