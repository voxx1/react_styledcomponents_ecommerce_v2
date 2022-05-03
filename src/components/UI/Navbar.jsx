import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from '../../store/auth-context';
import { useContext } from 'react'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "40px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: teal;
  font-weight: bold;
  ${mobile({ display: "none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: 0, marginLeft: "10px", textAligh: "flex-start" })}

`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "17px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin-left: 25px;
  ${mobile({ fontSize: "11px", marginLeft: "10px" })}
`;


const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity)
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
        </Left>
        <Center>
          <Logo to="/">ENVA.</Logo>

        </Center>
        <Right>
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/shop">SHOP</MenuItem>
          <MenuItem to="/cart">CART</MenuItem>
          {authCtx.isLoggedIn ?
            <>
              <MenuItem onClick={logoutHandler} to="/">LOGOUT</MenuItem>
            </>
            :
            <>
              <MenuItem to="/register">REGISTER</MenuItem>
              <MenuItem to="/login">LOGIN</MenuItem>
            </>
          }
          <MenuItem to="/cart">
            <Badge overlap="rectangular" badgeContent={quantity} color="primary">
              <ShoppingCartOutlined style={{ color: 'teal' }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;