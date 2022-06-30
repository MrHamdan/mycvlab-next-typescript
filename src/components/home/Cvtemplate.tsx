import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Styles from "../../styles/Cvtemplate.module.css";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[2],
}));

const Cvtemplate = () => {
  return (
    <div>
      <Box className={Styles.cv_template_background}>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={3} xl={3}>
                <Item className={Styles.cv_template_text_div}>
                  <Typography className={Styles.cv_text_heading_one}>
                    Our Professional
                  </Typography>
                  <Typography className={Styles.cv_text_heading_two}>
                    CV Templates
                  </Typography>
                  <Typography className={Styles.cv_text_para}>
                    Browse our selection of effective CV template examples for
                    every sector and find the best choice to create your CV
                    online. You can even switch easily between designs if you
                    change your mind.
                  </Typography>
                  <Typography className={Styles.cv_tags_div}>
                    <span className={Styles.cv_tags}>ALL</span>
                    <span className={Styles.cv_tags}>WITH PHOTO</span>
                    <span className={Styles.cv_tags}>NO PHOTO</span> <br />
                    <span className={Styles.cv_tags}>COVER LATTER</span>
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} lg={9}>
                <Item>xs=4</Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Cvtemplate;
