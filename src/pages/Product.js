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
import { useDispatch } from 'react-redux'
import { addProduct } from "../redux/cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Image = styled.img`
  width: 30vw;
  height: auto;
  object-fit: cover;
  ${mobile({ height: "50vh", width: "100%" })}
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

const Subtitle = styled.h3`
  font-weight: 600;
  color: black;
  margin-top: 20px;
`;

const SubtitleError = styled.h3`
font-weight: 600;
  color: red;
  margin-bottom: 10px;
`

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: flex-start;
  ${mobile({ width: "100%", justifyContent: "space-between" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;

`;

const AddedItem = styled.span`
${mobile({ textAlign: "center", display: "block" })}

`


const FilterColorSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  margin-right: 20px;

`;

const FilterColorOption = styled.option``;


const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  ${mobile({ width: "100%", justifyContent: "space-between" })}
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
  margin-left: 40px;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {

  const location = useLocation();
  const [products, setProducts] = useState([])
  const [singleProduct, setSingleProduct] = useState({
    color: [],
    size: [],
    id: "",
    img: "",
    title: "",
    price: null,
    tag: []
  })
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [filterError, setFilterError] = useState(false)
  const [itemAdded, setItemAdded] = useState(false)
  const dispatch = useDispatch();

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
    } else if (location.pathname === `/shop/unisex/${productID}`) {
      setProducts(unisexProducts)
    }
  }, [location.pathname, productID, products.length])


  useEffect(() => {
    if (products.length !== 0) {
      const uniqueItem = products.filter((item) => {
        return item.id === productID
      });
      const newProduct = uniqueItem[0]
      setSingleProduct({
        id: newProduct.id,
        color: newProduct.color,
        size: newProduct.size,
        tag: newProduct.tag,
        title: newProduct.title,
        img: newProduct.img,
        price: newProduct.price
      })
    }
  }, [productID, products])

  const handleClick = () => {
    if (color === "" || color === "---" || size === "" || size === "---") {
      setFilterError(true)
      setInterval(() => {
        setFilterError(false);
      }, 2000);
      return
    }
    console.log(color, size)
    dispatch(addProduct({ ...singleProduct, color, size, quantity }))
    setItemAdded(true)
  }


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
          <Subtitle>Pick your size and color</Subtitle>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColorSelect onChange={(e) => setColor(e.target.value)}>
                <FilterColorOption>---</FilterColorOption>
                {singleProduct.color.map((itemColor) => (
                  <FilterColorOption key={itemColor}>{itemColor}</FilterColorOption>
                ))}
              </FilterColorSelect>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                <FilterSizeOption>---</FilterSizeOption>
                {singleProduct.size.map((itemSize) => (
                  <FilterSizeOption key={itemSize}>{itemSize}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>

          </FilterContainer>
          {filterError ? <SubtitleError>Choose your size and color!</SubtitleError> : null}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>

          </AddContainer>
          {itemAdded ? <AddedItem >Item was added to cart!</AddedItem> : ""}
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;