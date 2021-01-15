import React from 'react';
import {
  LangStyled,
  LangDropdownStyled,
  LangDropdownItemStyled,
  LangCurrentStyled
} from './index.styled'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentItem } from '../../../store/actions/dropdownLang';
import { IntlActions } from 'react-redux-multilingual';
import { getCountryAsync } from '../../../store/actions/country';


function Lang() {
  const dispatch = useDispatch();
  const currentLang = useSelector(store => store.dropdown.currentItem);
  const currentWeather = useSelector(store => store.country.country);
  const items = [
    {
      name: 'ENG',
      locale: "en",
      id: '1'
    },
    {
      name: 'RU',
      locale: 'ru',
      id: '2'
    }
  ]
  return (
    <LangStyled>
      <LangCurrentStyled>
        {currentLang?.name}
      </LangCurrentStyled>
      <LangDropdownStyled>
        {items.map(item => (
          <LangDropdownItemStyled
            key={item.id}
            onClick={() => {
              dispatch(setCurrentItem(item));
              dispatch(IntlActions.setLocale(item.locale));
              currentWeather && dispatch(getCountryAsync({ value: currentWeather?.name, locale: item.locale }));
            }}
          >
            {item.name}
          </LangDropdownItemStyled>
        ))}
      </LangDropdownStyled>
    </LangStyled>
  )
}

export default Lang