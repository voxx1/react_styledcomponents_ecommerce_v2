import styled from "styled-components";
import { mobile } from "../../responsive";



const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
margin-top: 10px;`;

const ProductColor = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  
`;

const ProductColorContainer = styled.span`
margin: 10px 0px;
`

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const CartItem = ({ item }) => {

  return (
    <Product>
      <ProductDetail>
        <Image src={item.img} />
        <Details>
          <ProductName>
            <b>Product:</b> {item.title}
          </ProductName>
          <ProductId>
            <b>ID:</b> {item.id}
          </ProductId>
          <ProductColorContainer>
            <b>Color: </b> {item.color === "" ? <p> You didn't choose any color, you will get random one.</p> : <ProductColor color={item.color} />}
          </ProductColorContainer>
          <ProductSize>
            <b>Size:</b> {item.size === "" ? <p> You didn't choose any size, you will get any.</p> : item.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <ProductAmount>
            <b>Quantity: {item.quantity}</b></ProductAmount>
        </ProductAmountContainer>
        <ProductPrice>$ {item.price}</ProductPrice>
      </PriceDetail>
      <Hr />
    </Product>

  )
}

export default CartItem