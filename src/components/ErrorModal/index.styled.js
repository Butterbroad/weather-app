import styled from 'styled-components';

export const ErrorModalStyled = styled.div`
padding: 20px;
font-size: 24px;
font-weight: 700;
position: relative;
background-color: rgba(0,0,0,.5);
color: #fff;
border-radius: 10px;


@media (max-width: 1024px) {
  font-size: 18px;
}
@media (max-width: 639px) {
  font-size: 16px;
}
`;