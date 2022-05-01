import { Send } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {

  const [sending, setSending] = useState(false);
  const [inputValue, setInputValue] = useState(false);


  const emailHandler = () => {
    setSending(true)
  }

  console.log(inputValue.length)
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input onChange={(e) => setInputValue(e.target.value)} placeholder="Your email" />
        <Button onClick={emailHandler}>
          <Send />
        </Button>
      </InputContainer>
      {sending && inputValue.length !== undefined && inputValue.includes("@") ? <p>Thank you for registering! You will receive notification very soon.</p> : ""}
    </Container >
  );
};

export default Newsletter;