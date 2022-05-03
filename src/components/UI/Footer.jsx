import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-context';
import { useContext } from 'react'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h2``;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled(Link)`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    color: black;
    &:hover {
      color: teal;
    }
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: teal;
    }
  `;

const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <Container>
      <Left>
        <Logo>ENVA.</Logo>
        <Desc>
          Lorem ipsum is great text! It is used to fill empty spaces on your website. Feel free to use it everywhere!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem to="/">Home</ListItem>
          <ListItem to="/cart">Cart</ListItem>
          <ListItem to="/shop">All items</ListItem>
          <ListItem to="/shop/men">Man Fashion</ListItem>
          <ListItem to="/shop/women">Woman Fashion</ListItem>
          <ListItem to="/shop/unisex">Unisex Fashion</ListItem>
          {authCtx.isLoggedIn ?
            <>
              <ListItem onClick={logoutHandler} to="/">Logout</ListItem>
            </>
            :
            <>
              <ListItem to="/login">Login</ListItem>
              <ListItem to="/register">Register</ListItem>
            </>
          }
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 620 Texas Street 6/2a, Grand Canyon, USA
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +48 991 232 131
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> test@test.pl
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;