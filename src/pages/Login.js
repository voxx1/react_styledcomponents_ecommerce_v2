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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${smallmobile({ width: "100%" })}

`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Navigation = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
  
`;

const Login = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfBQRcSA2FoRMFgLJs_RnL-7tBN4KisH4';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
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
          <Title>SIGN IN</Title>
          <Form onSubmit={submitHandler}>
            <Input ref={emailInputRef} required id="email" type="email" placeholder="email" />
            <Input ref={passwordInputRef} required id="password" type="password" placeholder="password" />
            <Button>LOGIN</Button>

            <Link to="/register">
              <Navigation>CREATE A NEW ACCOUNT</Navigation>
            </Link>
            <Link to="/">
              <Navigation>GO BACK TO MAIN PAGE</Navigation>
            </Link>
            <p style={{ marginTop: "5px" }}>For testing purpose use email test@test.pl and password test123 or create your own in register page :)</p>
          </Form>
        </Wrapper>
      }

    </Container>
  );
};

export default Login;