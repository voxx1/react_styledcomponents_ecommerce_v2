import { Send } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 50vh;
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

const AddedEmail = styled.span`
font-weight: bold;
color: teal;
text: center;
margin-top: 10px;
${mobile({ display: "block" })}
`

const Newsletter = () => {

  const [sending, setSending] = useState(false);
  const [inputValue, setInputValue] = useState("");


  async function submitEmailHandler(userEmail) {
    const response = await fetch("https://react-h-1bba3-default-rtdb.europe-west1.firebasedatabase.app/newsletterEmails.json", {
      method: "POST",
      body: JSON.stringify({
        userEmail: userEmail,
      }),
      headers: {
        'Content-Type': 'application/json'
      },

    });
    const data = await response.json();
    console.log(data)
  }


  const emailHandler = () => {
    if (inputValue === "" || !inputValue.includes("@")) {
      return
    } else {
      submitEmailHandler(inputValue);
      setInputValue("")
      setSending(true)
      setInterval(() => {
        setSending(false);
      }, 3000);
    }
  }

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Your email" />
        <Button onClick={emailHandler}>
          <Send />
        </Button>
      </InputContainer>
      {sending ? <AddedEmail>Thank you for registering! You will receive notification very soon.</AddedEmail> : ""}
    </Container >
  );
};

export default Newsletter;