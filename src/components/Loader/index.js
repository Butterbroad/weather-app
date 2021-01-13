
import React from 'react';
import {
  LoaderStyled,
  LoaderSpinnerStyled
} from './index.styled';

function Loader() {
  return (
    <LoaderStyled>
      <LoaderSpinnerStyled><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></LoaderSpinnerStyled>
    </LoaderStyled>
  )
}

export default Loader