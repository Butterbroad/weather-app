import styled from 'styled-components';

export const CountryStyled = styled.div`
max-width: 660px;
margin: 10% auto;
padding: 15px;
min-height: 450px;
border-radius: 30px;

@media (max-width: 1439px) {
    min-height: 350px;
    border-radius: 20px;
}
@media (max-width: 767px) {
    min-height: 250px;
}
`;

export const CountryWrapperStyled = styled.div`
width: 100%;
background-color: rgba(0,0,0,.5);
color: #fff;
padding: 20px;
border-radius: 10px;
position: relative
`;

export const CountryNameStyled = styled.div`
font-size: 46px;
font-weight: 700;
margin-bottom: 10px;
text-align: left;

@media (max-width: 530px) {
    font-size: 24px;
}
`;

export const CountryTextLineStyled = styled.div`
font-size: 24px;
font-weight: 600;
margin-bottom: 10px;
text-align: left;

@media (max-width: 530px) {
    font-size: 18px;
}
`;

export const CountryWeatcherIconStyled = styled.div`
position: absolute;
top: 10px;
right: 15px;
min-width: 60px;

img {
    min-width: 100%;
    display: block;
}

@media (max-width: 530px) {
    min-width: auto;
    max-width: 40px;
    right: 5px;

    img {
        max-width: 100%;
    }
}
`;