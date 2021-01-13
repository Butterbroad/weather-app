import styled from 'styled-components';

export const CountryStyled = styled.div`
max-width: 70%;
margin: 30px auto;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
padding: 30px;
min-height: 450px;
border-radius: 30px;

@media (max-width: 1439px) {
    max-width: 80%;
    padding: 20px;
    min-height: 350px;
    border-radius: 20px;
}
@media (max-width: 767px) {
    min-height: 250px;
}
`;

export const CountryWrapperStyled = styled.div`
max-width: 80%;
width: 100%;
background-color: rgba(0,0,0,.5);
color: #fff;
padding: 20px;
border-radius: 10px;
`;

export const CountryNameStyled = styled.div`
font-size: 72px;
font-weight: 700;
margin-bottom: 10px;
text-align: left;
`;

export const CountryTextLineStyled = styled.div`
font-size: 32px;
font-weight: 600;
margin-bottom: 10px;
text-align: left;
`;