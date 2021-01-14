import React from 'react'
import {
  HeaderInputStyled,
  HeaderInputAreaStyled,
} from './index.styled';

function HeaderInput({ value, setValue, onInputSubmit }) {
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
      />
    </HeaderInputStyled>
  )
}

export default HeaderInput

