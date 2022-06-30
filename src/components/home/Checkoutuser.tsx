import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Styles from "../../styles/Checkoutuser.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Checkoutuser = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Item>
              <Typography>
                <Typography className={Styles.checkout_text_heading}>
                  Check Out Our User Loves
                  <span className={Styles.checkout_text_heading_dot}>.</span>
                </Typography>
                <Typography className={Styles.advantage_text_para}>
                  Creating a winning document with our CV maker is easy and can
                  be done in minutes. Here are 6 reasons why OnlineCV <br /> can
                  quickly help you design your best CV ever:
                </Typography>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
                <Typography>
                    4.5 of 5
                </Typography>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Checkoutuser;
