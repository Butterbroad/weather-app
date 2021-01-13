import React, { useState } from 'react';
import {
  HeaderStyled,
  HeaderWrapperStyled,
  HeaderInputStyled,
  HeaderButtonStyled
} from './index.styled';
import Lang from './Lang';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCountryAsync,
} from '../../store/actions/country';

function Header() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getCountryAsync(value));
    setValue("");
  }


  return (
    <HeaderStyled>
      <HeaderWrapperStyled>

        <HeaderInputStyled
          type="text"
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === "Enter" && value) {
              clickHandler()
            }
          }}
        />

        <HeaderButtonStyled
          onClick={() => {
            clickHandler()
          }}
        >
          Получить
        </HeaderButtonStyled>

        <Lang />

      </HeaderWrapperStyled>

    </HeaderStyled>
  )
}

export default Header
