import styled from 'styled-components';

export const HeaderInputStyled = styled.div`
max-width: 80%;
width: 100%;
position: relative;
`;

export const HeaderInputAreaStyled = styled.input`
width: 100%;
height: 40px;
outline: none;
border: none;
font-size: 18px;
border-radius: 6px;
padding: 0 15px;

@media (max-width: 767px) {
  font-size: 14px;
}
`;