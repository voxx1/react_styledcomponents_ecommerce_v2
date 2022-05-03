import React from 'react'
import styled from 'styled-components'
import { mobile, smallmobile } from '../../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: -55px;
  overflow: hidden;
  ${mobile({ marginTop: "20px" })}

`;


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column" })}

`;


const InfoContainer = styled.div`
  flex: 1;
  
  padding: 45px;
  ${mobile({ padding: "15px", textAlign: "center" })}

`;

const ImageContainer = styled.div`
`

const Image = styled.img`
  width: 55vw;
  ${mobile({ width: "100vw", height: "320px" })}
  ${smallmobile({ height: "250px", width: "100%" })}

`

const Title = styled.h1`
  font-size: 40px;
  ${mobile({ fontSize: "25px" })}

`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {



  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src="https://media.istockphoto.com/photos/shopping-time-young-women-shopping-together-consumerism-fashion-picture-id1194744301?k=20&m=1194744301&s=170667a&w=0&h=M-vLEm33tChlo7OtfzqmRqlFqgnu_QxO9ChA5k43zhI=" />
        </ImageContainer>
        <InfoContainer>
          <Title>Get your new clothes today!</Title>
          <Desc>We are launching our ner collection of best clothes and shoes!</Desc>
          <Link to="/shop">
            <Button>SHOP NOW</Button>
          </Link>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Slider