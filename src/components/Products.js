import styled from "styled-components";
import { popularProducts } from "../DUMMY_DATA";
import Product from "./Product";
import { mobile } from '../responsive'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 45px;
  ${mobile({ padding: "15px", textAlign: "center" })}
`;



const Title = styled.h2`
  font-size: 40px;
  ${mobile({ fontSize: "25px", marginTop: "0px" })}


`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Products = () => {
  return (
      <>
      <InfoContainer>
              <Title>Check our bestsellers!</Title>
              <Desc>Click on item to see more!</Desc>
            </InfoContainer>
        <Container> 
              {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
                ))}  
        </Container>
      </>
      
  );
};

export default Products;