import styled from "styled-components";
import { categories } from '../../DUMMY_DATA'
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

const CategoryList = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Check items categories!</Title>
        <Desc>Click on any to see more!</Desc>
      </InfoContainer>
      <ItemsWrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </ItemsWrapper>

    </Container>
  );
};

export default CategoryList;