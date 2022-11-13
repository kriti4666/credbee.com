import {Box, Button, styled, TextField, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {authenticateLogin} from "../API/signupAPI";
import { ContextAuth } from "../AuthContextProvider.jsx/AuthContextProvider";
import {AuthContext} from "../GlobalContext/AuthContext";

const LoginPageNav = styled(Box)`
  height: 100px;
  width: 1450px;
  margin: auto auto;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
`;
const LoginPageLogo = styled("img")({
  width: "150px",
});

const LoginSection = styled(Box)`
  height: 480px;
  width: 820px;
  border: 1px solid transparent;
  margin: auto auto;
  margin-top: 20px;
  display: flex;
  padding: 20px;
  border-radius: 12px;
`;
const LoginSectionLeftDiv = styled(Box)`
  border: 1px solid transparent;
  width: 50%;
`;

const LoginSectionRightDiv = styled(Box)`
  border: 1px solid transparent;
`;

const loginInit = {
  email: "",
  password: "",
};

const Login = () => {
  const {authStatus, handleAuthStatus} = useContext(ContextAuth);

  const navigate = useNavigate();
  const [login, setLogin] = useState(loginInit);
  const [status, setStatus] = useState(false);

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
  };

  let res, x;
  const loginUser = async () => {
    res = await authenticateLogin(login);
    x = res.data;
    if (res.status === 200 && x !== "admin@chargebee.com") {
      handleAuthStatus({
        checkAuth: true,
        admin: false,
        user: true,
      });
      alert("Login Successful");
      navigate(`/user/${login.email}`);
    }
    if (x === "admin@chargebee.com") {
      setStatus(true)
      handleAuthStatus({
        checkAuth: true,
        admin: true,
        user: false,
      });
      navigate("/admin");
    }
    setLogin(loginInit);
  };

   console.log(authStatus)

  return (
    <Box style={{background: "#EAEAF4", height: "700px"}}>
      <LoginPageNav
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
          },
        }}
      >
        <LoginPageLogo src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logotype-black.svg"></LoginPageLogo>
        <Box sx={{display: "flex", marginTop: 5}}>
          {/* <Typography sx={{ fontStyle: "italic", color: "#7C7C81" }} >Don't have an account? </Typography>&nbsp;&nbsp; */}

          {
            // status ? <Typography sx={{ fontWeight: "bold" }}> {res?.data}</Typography> :
            <Typography sx={{fontWeight: "bold"}}> Sign up →</Typography>
          }
        </Box>
      </LoginPageNav>
      <LoginSection
        style={{background: "white"}}
        sx={{
          width: {
            sm: 500,
            md: 820,
            lg: 820,
          },
        }}
      >
        <LoginSectionLeftDiv>
          <img
            style={{width: 100, marginRight: 300, marginTop: 30}}
            src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logotype-black.svg"
            alt="image1"
          ></img>
          <Typography sx={{marginTop: 3, marginLeft: -2}}>
            ANNOUNCING SUMMER 2022 PRODUCT RELEASE
          </Typography>
          <Typography sx={{marginLeft: -1, fontSize: 22, marginTop: 2}}>
            Monetize Effectively to Tackle Market Turbulence
          </Typography>
          <Box style={{display: "flex"}}>
            <img
              style={{width: "200px", marginTop: -88}}
              src="https://webstatic.chargebee.com/assets/web/535/images/summer-release/summer-release-bg.svg"
              alt="image2"
            ></img>
            <Typography
              sx={{
                marginTop: 2,
                textAlign: "justify",
                marginLeft: 2,
                fontSize: 15,
              }}
            >
              Chargebee's Summer 2022 Release brings you better monetization
              capabilities that help you seize revenue opportunities by
              improving customer lifetime value, managing cashflows better, and
              achieving topline growth. See what's new across our products
            </Typography>
          </Box>
        </LoginSectionLeftDiv>
        <LoginSectionRightDiv>
          <Typography
            style={{
              marginTop: "30px",
              fontSize: "20px",
              marginRight: "150px",
              color: "#6D6D71",
            }}
          >
            Sign in to Chargebee!
          </Typography>
          <TextField
            style={{marginTop: "10px", width: "350px"}}
            variant="outlined"
            label="name@comapany.com"
            name="email"
            onChange={(e) => onValueChange(e)}
            value={login.email}
          />
          <TextField
            style={{marginTop: "10px", width: "350px"}}
            variant="outlined"
            label="Password"
            name="password"
            onChange={(e) => onValueChange(e)}
            value={login.password}
          />
          <Button
            variant="contained"
            style={{
              padding: "10px",
              width: "170px",
              background: "#FF7846",
              margin: 18,
              marginRight: "190px",
            }}
            onClick={() => loginUser()}
          >
            Sign in
          </Button>{" "}
          <br></br>
          <Button
            variant="contained"
            style={{
              padding: "20px",
              width: "220px",
              background: "#4285F4",
              marginRight: "120px",
            }}
          >
            Sign in with Google
          </Button>
          <Typography style={{marginTop: 20, color: "blue"}}>
            Sign in with Single Sign-On
          </Typography>
        </LoginSectionRightDiv>
      </LoginSection>
    </Box>
  );
};

export default Login;
