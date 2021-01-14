import React, { useState } from 'react';
import {
  HeaderStyled,
  HeaderWrapperStyled,
  HeaderButtonStyled
} from './index.styled';
import Lang from './Lang';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCountryAsync,
} from '../../store/actions/country';
import HeaderInput from './HeaderInput';
import { useTranslate } from 'react-redux-multilingual';

function Header() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { locale } = useSelector(store => store.dropdown.currentItem);
  const clickHandler = () => {
    dispatch(getCountryAsync({ value, locale }));
    setValue("");
  }
  const translate = useTranslate();

  return (
    <HeaderStyled>
      <HeaderWrapperStyled>

        <HeaderInput value={value} setValue={setValue} onInputSubmit={clickHandler} />

        <HeaderButtonStyled
          onClick={() => {
            clickHandler()
          }}
        >
          {translate('button')}
        </HeaderButtonStyled>

        <Lang />

      </HeaderWrapperStyled>

    </HeaderStyled>
  )
}

export default Header
