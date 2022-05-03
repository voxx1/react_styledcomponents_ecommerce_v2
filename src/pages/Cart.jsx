import styled from "styled-components";
import Annoucement from "../components/UI/Annoucement";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import AuthContext from '../store/auth-context';
import { useContext, useState } from 'react'
import Modal from "../components/Cart/Modal";
import Checkout from "../components/Cart/Checkout";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useDispatch } from 'react-redux'
import { removeAll } from "../redux/cartSlice";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "10px" })}

`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "0px 5px" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ErrorText = styled.p`
font-weight: bold;
font-size: 16px;
text-align: center;
margin-top: 10px;
color: red;
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const FormSubmitedText = styled.h2`
font-weight: bold;
margin-bottom: 20px;
text-align: center;

${mobile({ fontSize: "14px" })}
`

const FormSubmitedButton = styled.button`
width: 50%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
margin: 0 auto;
cursor: pointer;
`


const Cart = () => {

  const authCtx = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.products)
  const itemsQuantity = useSelector((state) => state.cart.quantity)
  const totalPrice = useSelector((state) => state.cart.total)
  const discountAmount = useSelector((state) => state.cart.discount)
  const shippingAmount = useSelector((state) => state.cart.shipping)

  const totalAmount = Number(totalPrice - discountAmount + shippingAmount).toFixed(2)

  const dispatch = useDispatch();



  const resetItems = () => {
    dispatch(removeAll());
  }




  const [fillingForm, setFillingForm] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)
  const [isSending, setIsSending] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false)


  const changeOrderState = () => {
    setFillingForm(!fillingForm)
  }

  const showError = () => {
    setEmptyCart(true)
    setInterval(() => {
      setEmptyCart(false);
    }, 3000);
  }


  let checkOutAuthorisation = <Link to="/login"> <Button type="filled">CHECKOUT NOW</Button> </Link>

  if (authCtx.isLoggedIn && cartItems.length !== 0) {
    checkOutAuthorisation = <Button onClick={changeOrderState} type="filled">CHECKOUT NOW</Button>
  } else if (cartItems.length === 0 && authCtx.isLoggedIn) {
    checkOutAuthorisation = <>
      <Button onClick={showError} type="filled">CHECKOUT NOW</Button>
      {emptyCart ? <ErrorText>Your cart is empty!</ErrorText> : ""}
    </>
  }

  async function submitOrderHandler(userDetails) {
    setIsSending(true)
    const response = await fetch("https://react-h-1bba3-default-rtdb.europe-west1.firebasedatabase.app/cartOrder.json", {
      method: "POST",
      body: JSON.stringify({
        userDetails: userDetails,
        cartItems: cartItems
      }),
      headers: {
        'Content-Type': 'application/json'
      },

    });
    const data = await response.json();
    console.log(data)
    setIsSending(false)
    setFormSubmited(true)
  }

  let cartModalContent = <Modal>
    <div>
      {isSending ? <LoadingSpinner /> : <Checkout onSubmit={submitOrderHandler} onCancel={changeOrderState} />}

    </div>
  </Modal>

  if (formSubmited) {
    cartModalContent =
      <Modal>
        <FormSubmitedText>Congratulations! Your order was sent! :)</FormSubmitedText>
        <div >
          <Link style={{ display: "flex" }} to="/">
            <FormSubmitedButton onClick={resetItems} >Close</FormSubmitedButton>
          </Link>
        </div>
      </Modal>
  }


  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/shop">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>

          <TopTexts>
            <TopText>Shopping Bag({itemsQuantity})</TopText>
          </TopTexts>
          <Link to="/">
            <TopButton >BACK TO HOME PAGE</TopButton>
          </Link>

        </Top>
        <Bottom>
          {itemsQuantity === 0 ? <Info ><p style={{ padding: "20px" }}>Your cart is empty! Add items to proceed.</p> </Info> : <Info>
            {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          </Info>
          }
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {shippingAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ {discountAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {itemsQuantity === 0 ? 0 : totalAmount}</SummaryItemPrice>
            </SummaryItem>
            {checkOutAuthorisation}
          </Summary>
          {fillingForm ? cartModalContent : ""}
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;