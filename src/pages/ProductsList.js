import styled from "styled-components";
import Navbar from "../components/UI/Navbar";
import Annoucement from "../components/UI/Annoucement";
import AllProducts from "../components/Products/AllProducts";
import Newsletter from "../components/UI/Newsletter"
import Footer from "../components/UI/Footer";
import { mobile } from "../responsive";
import MenProducts from "../components/Products/MenProducts";
import WomenProducts from "../components/Products/WomenProducts";
import UnisexProducts from "../components/Products/UnisexProducts";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h2`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductsList = (props) => {



  const categoryName = window.location.pathname.split("/").pop()
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Price (asc)")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  let typeinfo

  if (props.type === "men") {
    typeinfo = <MenProducts category={categoryName} filters={filters} sort={sort} />
  } else if (props.type === "women") {
    typeinfo = <WomenProducts category={categoryName} filters={filters} sort={sort} />
  } else if (props.type === "unisex") {
    typeinfo = <UnisexProducts category={categoryName} filters={filters} sort={sort} />
  }
  else {
    typeinfo = <AllProducts category={categoryName} filters={filters} sort={sort} />
  }

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>{props.name}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled defaultValue>
              Color
            </Option>
            <Option>orange</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>pink</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled defaultValue>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <Select name="tag" onChange={handleFilters}>
            <Option disabled defaultValue>
              Gender
            </Option>
            <Option>men</Option>
            <Option>women</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled defaultValue>Sort by</Option>
            <Option value="Price (asc)" defaultValue>Price (asc)</Option>
            <Option value="Price (desc)">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {typeinfo}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductsList;