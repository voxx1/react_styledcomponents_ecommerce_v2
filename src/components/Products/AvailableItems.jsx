import styled from "styled-components";
import Product from "./Product";
import { mobile } from '../../responsive';
import { useState, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

const AvailableItems = ({ category, sort, filters }) => {

    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const fetchAllProducts = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await fetch(`https://react-h-1bba3-default-rtdb.europe-west1.firebasedatabase.app/allCategories/-N18ZJjwSBrX7Qc-qbFH/${category}Products.json`)
                if (!response.ok) {
                    throw new Error("Failed to load items! :(");
                }
                const data = await response.json();
                const transformedProducts = [];

                for (const key in data) {
                    transformedProducts.push({
                        id: data[key].id,
                        title: data[key].title,
                        price: data[key].price,
                        color: data[key].color,
                        size: data[key].size,
                        tag: data[key].tag,
                        img: data[key].img,
                    })
                }
                setProducts(transformedProducts)
            } catch (error) {
                setError(error.message)
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchAllProducts();
    }, [category])



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


    let productItems = <LoadingSpinner />

    if (isLoading === false && error === null) {
        productItems =
            <>
                <Container>
                    {filteredProducts.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </Container>
            </>
    }

    return (
        <>
            <InfoContainer>
                {category === "all" ? <Title>See all of our products!</Title> : <Title>See all of our {category} products!</Title>}
                <Desc>Click on item to see more!</Desc>
            </InfoContainer>
            {productItems}
            {filteredProducts.length === 0 ? <InfoContainer>
                <Title>There are 0 products for those categories :(</Title>
            </InfoContainer> : ""}
        </>
    );
};

export default AvailableItems;