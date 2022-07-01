import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Styles from "../../styles/Footer.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Footer = () => {
  return (
    <div>
      <Box className={Styles.footer_section}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography>
                    <Typography
                      component="span"
                      className={Styles.footer_logo_text_first}
                    >
                      MYCV
                    </Typography>
                    <Typography
                      component="span"
                      className={Styles.footer_logo_text_second}
                    >
                      LAB.
                    </Typography>
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    HOMEPAGE
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    RESUME TEMPLATES
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CV TEMPLATES
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    COVER LETTERS
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography className={Styles.footer_link_heading}>
                    Curriculum Vitae
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CV BUILDER
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CV TEMPLATES
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CV EXAMPLES
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    HOW TO WRITE A CV
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CV FORMATS
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    GET HIRED DURING COVID-19
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography className={Styles.footer_link_heading}>
                    About
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    WHO WE ARE
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    TERMS AND CONDITIONS
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    PRIVACY POLICY
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    CONTACT US
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    SITE MAP
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item sx={{ textAlign: "left" }}>
                  <Typography className={Styles.footer_link_heading}>
                    Customer Service
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    0808 189 0676
                  </Typography>
                  <Typography className={Styles.footer_links}>
                    MON-SUN 09:00-21:00
                  </Typography>
                  <Typography>
                    <Typography
                      component="span"
                      className={Styles.footer_social_icons}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Typography>
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
