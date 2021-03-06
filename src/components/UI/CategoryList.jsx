import styled from "styled-components";
import { mobile, smallmobile } from "../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop: "0px" })}
  ${smallmobile({ marginTop: "-200px" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 45px;
  ${mobile({ padding: "15px", textAlign: "center" })}
`;

const ItemsWrapper = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}

`

const Title = styled.h2`
  font-size: 40px;
  margin-top: -25px;
  ${mobile({ fontSize: "25px", marginTop: "0px" })}
  


`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const DUMMY_CATEGORIES = [
  {
    id: "c1",
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "MEN",
    type: 'men'
  },
  {
    id: "c2",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "WOMEN",
    type: "women"
  },
  {
    id: "c3",
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "UNISEX",
    type: 'unisex'
  },
];

const CategoryList = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Check items categories!</Title>
        <Desc>Click on any to see more!</Desc>
      </InfoContainer>
      <ItemsWrapper>
        {DUMMY_CATEGORIES.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </ItemsWrapper>

    </Container>
  );
};

export default CategoryList;