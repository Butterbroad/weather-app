import styled from "styled-components";

export const LangStyled = styled.div`
height: 40px;
  background-color: #fff;
  color: #000;
  margin-left: 20px;
  border-radius: 6px 6px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex: 0 0 50px;
  cursor: pointer;

  :hover div {
      visibility: visible;
      opacity: 1;
  }

  @media (max-width: 1023px) {
    margin-left: 10px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const LangCurrentStyled = styled.div`
font-size: 16px;
transition: all .4s ease;
text-transform: uppercase;
`;

export const LangDropdownStyled = styled.div`
position: absolute;
top: 100%;
right: 0;
width: 100%;
text-align: center;
visibility: hidden;
opacity: 0;
`;

export const LangDropdownItemStyled = styled.div`
padding: 8px;
background-color: #fff;
cursor: pointer;
text-transform: uppercase;
font-size: 16px;
transition: all .3s ease;
border-top: 1px solid #34495e;
&:last-child {
  border-radius: 0 0 6px 6px;
}
&:hover {
  background-color: #c8d6e5;
}
`;