import styled from "styled-components";
import { mobile, smallmobile } from "../responsive";
import AuthContext from '../store/auth-context';
import { useRef, useState, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${smallmobile({ width: "100%" })}

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: block;

`;

const Navigation = styled.p`
  margin: 15px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
  display: block;

`;

const Register = () => {

  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredLastname = lastNameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;


    setIsLoading(true);
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfBQRcSA2FoRMFgLJs_RnL-7tBN4KisH4';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        name: enteredName,
        lastname: enteredLastname,
        username: enteredUsername,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/")
      })
      .catch((err) => {
        alert(err.message);
      });


  };

  return (
    <Container>
      {isLoading ? <LoadingSpinner /> :
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={submitHandler}>
            <Input ref={nameInputRef} type="text" id="name" placeholder="name" />
            <Input ref={lastNameInputRef} type="text" id="lastname" placeholder="last name" />
            <Input ref={usernameInputRef} type="text" id="username" placeholder="username" />
            <Input ref={passwordInputRef} required id="password" type="password" placeholder="password" />
            <Input ref={emailInputRef} required id="email" type="email" placeholder="email" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>

            <Button>CREATE</Button>
          </Form>
          <Link to="/">
            <Navigation>GO BACK TO MAIN PAGE</Navigation>
          </Link>
        </Wrapper>
      }
    </Container>
  );
};

export default Register;