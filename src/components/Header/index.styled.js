import styled from "styled-components";

export const HeaderStyled = styled.header`
background-color: #34495e;
`;

export const HeaderWrapperStyled = styled.div`
max-width: 1470px;
padding: 0 15px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
`;

export const HeaderButtonStyled = styled.button`
height: 40px;
padding: 0 15px;
min-width: 200px;
background-color: #fff;
color: #000;
cursor: pointer;
border: none;
margin-left: 20px;
outline: none;
border-radius: 6px;
font-size: 18px;

@media (max-width: 1023px) {
  margin-left: 10px;
}
@media (max-width: 639px) {
  min-width: auto;
}
`;