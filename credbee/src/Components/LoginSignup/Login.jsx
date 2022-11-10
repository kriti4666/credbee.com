import { Box, styled, Typography } from "@mui/material"

const LoginPageNav = styled(Box)`

    height: 100px;
    width: 1450px;
    margin: auto auto;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
`
const LoginPageLogo = styled("img")({
    width: "150px"
});

const LoginSection = styled(Box)`

    height: 500px;
    width: 850px;
    border: 1px solid black;
    margin: auto auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`
const LoginSectionLeftDiv = styled(Box)`

    border: 1px solid black;
    width: 50%

`

const LoginSectionRightDiv = styled(Box)`

    border: 1px solid red;

`


const Login = () => {

    return (
        <>
            <LoginPageNav>
                <LoginPageLogo src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logotype-black.svg"></LoginPageLogo>
                <Box sx={{ display: "flex", marginTop: 5 }}>
                    <Typography sx={{ fontStyle: "italic", color: "#7C7C81" }} >Don't have an account? </Typography>&nbsp;&nbsp;
                    <Typography sx={{ fontWeight: "bold" }}> Sign up →</Typography>
                </Box>
            </LoginPageNav>
            <LoginSection>
                <LoginSectionLeftDiv>
                    <img src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logo-white.svg" alt="" />
                    <Typography>
                        ANNOUNCING SUMMER 2022 PRODUCT RELEASE
                    </Typography>
                    <Typography>
                        Monetize Effectively to Tackle Market Turbulence
                    </Typography>
                    <Box style={{ display: "flex" }} >
                        <img style={{ width: "200px" }} src="https://webstatic.chargebee.com/assets/web/535/images/summer-release/summer-release-bg.svg"></img>
                        <Typography>
                            Chargebee's Summer 2022 Release brings you better monetization capabilities that help you seize revenue opportunities by improving customer lifetime value, managing cashflows better, and achieving topline growth.
                            See what's new across our products
                        </Typography>
                    </Box>
                </LoginSectionLeftDiv>
                <LoginSectionRightDiv>

                </LoginSectionRightDiv>
            </LoginSection>
        </>
    )

}

export default Login
