import React from 'react';
import {
  LangStyled,
  LangDropdownStyled,
  LangDropdownItemStyled,
  LangCurrentStyled
} from './index.styled'
// import LangItem from './LangItem/LangItem';
// import { useSelector } from 'react-redux';

function Lang() {
  // const currentLang = useSelector(store => store.lang.currentLang);
  // const items = [
  //   {
  //     name: 'ENG',
  //     locale: "en"
  //   },
  //   {
  //     name: 'RU',
  //     locale: 'ru',
  //   }
  // ]
  return (
    <LangStyled>
      <LangCurrentStyled>RU</LangCurrentStyled>
      <LangDropdownStyled>
        <LangDropdownItemStyled>
          RU
        </LangDropdownItemStyled>
        <LangDropdownItemStyled>
          EN
        </LangDropdownItemStyled>
      </LangDropdownStyled>
    </LangStyled>
  )
}

export default Lang