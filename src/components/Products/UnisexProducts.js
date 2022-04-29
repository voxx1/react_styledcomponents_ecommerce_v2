import styled from "styled-components";
import { unisexProducts } from "../../DUMMY_DATA";
import Product from "./Product";
import { mobile } from "../../responsive";
import { useState, useEffect } from "react";


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

const UnisexProducts = ({ category, sort, filters }) => {

    const [products, setProducts] = useState(unisexProducts)
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
        )
        )
        );

    }, [category, products, filters])

    useEffect(() => {
        if (sort === "Price (asc)") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }

    }, [sort])

    return (
        <>
            <InfoContainer>
                <Title>See all of our unisex products!</Title>
                <Desc>Click on item to see more!</Desc>
            </InfoContainer>
            <Container>
                {filteredProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </>

    );
};

export default UnisexProducts;