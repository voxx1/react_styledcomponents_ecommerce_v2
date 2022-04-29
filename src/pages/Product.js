import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Annoucement from "../components/UI/Annoucement";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import Newsletter from "../components/UI/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts, unisexProducts, menProducts, womenProducts } from "../DUMMY_DATA";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 600;
  color: black;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid black;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {

  const location = useLocation();
  const [products, setProducts] = useState(allProducts)
  const [singleProduct, setSingleProduct] = useState({
    color: [],
    size: [],
  })
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");


  let productID = window.location.pathname.split("/").pop()

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(prev => prev - 1)
    } else {
      setQuantity(prev => prev + 1)
    }
  }

  useEffect(() => {
    if (location.pathname === `/shop/${productID}`) {
      setProducts(allProducts)
    } else if (location.pathname === `/shop/men/${productID}`) {
      setProducts(menProducts)
    } else if (location.pathname === `/shop/women/${productID}`) {
      setProducts(womenProducts)
    } else {
      setProducts(unisexProducts)
    }



  }, [location.pathname, productID])

  useEffect(() => {
    const uniqueItem = products.filter((item) => {
      return item.id === productID
    });
    setSingleProduct(uniqueItem[0])
  }, [productID, products])


  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImgContainer>
          <Image src={singleProduct.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{singleProduct.title}</Title>
          <Desc>
            Lorem ipsum is great text! It is used to fill empty spaces on your website. Feel free to use it everywhere!
            Lorem ipsum is great text! It is used to fill empty spaces on your website. Feel free to use it everywhere!
            Lorem ipsum is great text! It is used to fill empty spaces on your website. Feel free to use it everywhere!

          </Desc>
          <Price>$ {singleProduct.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {singleProduct.color.map((itemColor) => (
                <FilterColor color={itemColor} key={itemColor} onClick={() => setColor(itemColor)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {singleProduct.size.map((itemSize) => (
                  <FilterSizeOption key={itemSize}>{itemSize}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;