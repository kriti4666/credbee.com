import { Box, Typography, styled, TextField, Checkbox, FormGroup, FormControlLabel, Button, Grid } from "@mui/material"


const LeftBox = styled(Grid)`

    //  width: 480px;
     heigth: 550px;
`;

const RightBox = styled(Grid)`

    // border: 1px solid black;
    width: 800px;
    heigth: 550px;
    margin-left:160px

`;

const SignupSection = styled(Box)`

    border: 1px solid grey;
    border-radius: 10px;
    margin-top: 50px;
    padding: 40px;

`

const Logo = styled("img")({
    width: "150px"
});

const DP = styled("img")({
    height: "290px",
    width: "58%",
    marginTop: 50,

});

const ClientCompanyImg = styled("img")({
    width: "150px",
    marginTop: "20px"
})

const LastCustomerImage = styled("img")({
    marginLeft: "140px",
    marginTop: "40px"
})

const Signup = () => {

    return (
        <Grid style={{ display: "flex" }}>
            <LeftBox sx={{
                width: {
                    xs: 0,
                    sm: 0,
                    md: 0,
                    lg: 480
                }

            }} >
                <Box style={{ background: "#B4B4B4", textAlign: "center", height: 340 }}>
                    <DP src="https://webstatic.chargebee.com/assets/web/535/images/signup/customers/dailius-wilson-getaccept.png"></DP>
                </Box>
                <Box style={{ background: "#38039A", color: "white", textAlign: "center", height: "100px", }}>
                    <Typography style={{ fontSize: "30px", fontWeight: "930", lineHeight: 3 }} >Dailius Wilson</Typography>
                    <Typography style={{ lineHeight: -90, marginTop: -25, fontWeight: "200" }}>VP Sales & Growth</Typography>
                </Box>
                <Box style={{ background: "#500AD2", padding: 60, textAlign: "center", height: 200 }}>
                    <Typography style={{ color: "white" }}>Chargebee is a fantastic solution that really meets the needs of any SaaS business. Our revenue grew 4x in 12 months, using Chargebee. </Typography>
                    <ClientCompanyImg src="https://webstatic.chargebee.com/assets/web/535/images/signup/customers/get-accept-logo.svg"></ClientCompanyImg>
                    <Typography style={{ marginTop: 90, color: "#FCA268", textTransform: "uppercase" }} >Built For Hyper-growth</Typography>

                </Box>
            </LeftBox>
            <RightBox>
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <Logo src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"></Logo>
                    <Typography style={{ fontSize: "20px", marginTop: "10px", fontWeight: "600" }}>Login →</Typography>
                </Box>

                <Typography style={{ fontSize: "20px", fontWeight: "600", marginTop: "40px", }} >Create Your Sandbox Account </Typography>

                <SignupSection style={{ height: 480, marginTop: "10px" }}>
                    <Typography style={{ color: "#818181", fontSize: "20px", fontWeight: "600" }} >Work email</Typography>
                    <TextField style={{ marginTop: "10px", width: "700px" }} variant="outlined" label='Enter Email' />
                    <Typography style={{ color: "#818181", marginTop: "30px", fontSize: "20px", fontWeight: "600" }}>Phone Number</Typography>
                    <TextField style={{ marginTop: "10px", width: "700px" }} variant="outlined" label='Enter Phonenumber' />
                    <FormGroup style={{ marginTop: "20px", color: "#818181" }} >
                        <FormControlLabel control={<Checkbox />} label="I want to be notified about the awesome happenings* at Chargebee " />
                    </FormGroup>
                    <Button variant="contained" style={{ padding: "20px", width: "200px", marginTop: "20px", background: "#500AD2" }} >Complete Signup →</Button>
                    <Typography style={{ marginTop: "35px", color: "#818181" }} >By clicking on Complete Signup, you agree to our Terms and you acknowledge having
                        <br></br> read our Privacy Notice</Typography>
                    <Typography style={{ marginTop: "10px", fontSize: "15px", color: "#818181" }} >*This includes periodic newsletters, emails about usage tips, billing practices, and other communications. You can opt out anytime within the app. </Typography>
                </SignupSection>
                <LastCustomerImage src="https://webstatic.chargebee.com/assets/web/535/images/signup/customers/chargebee-customers.svg"></LastCustomerImage>
            </RightBox>
        </Grid>
    )

}

export default Signup

