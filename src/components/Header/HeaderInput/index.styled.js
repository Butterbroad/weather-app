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
border-top-left-radius: 6px;
border-top-right-radius: 6px;
padding: 0 15px;

@media (max-width: 767px) {
  font-size: 14px;
}
`;

export const HeaderInputDropdownStyled = styled.ul`
position: absolute;
top: calc(100% + 1px);
left: 0;
width: 100%;
z-index: 2;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
overflow: hidden;
`;

export const HeaderInputDropdownItemStyled = styled.li`
width: 100%;
height: 40px;
border-bottom: 1px solid #000;
padding: 0 15px;
font-size: 18px;
font-weight: 500;
display: flex;
align-items: center;
cursor: pointer;
background-color: rgba(255,255,255,.7);
transition: all .3s ease;

&:last-child {
  border-bottom: none;
}
&:hover {
  background-color: #fff;
}
`;