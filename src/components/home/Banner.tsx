import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/Banner.module.css";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Banner = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={5} xl={5}>
            <Item className={Styles.background_first}>
              <Grid item xs={3} md={1} lg={3} xl={3}>
                <Item className={Styles.socials_div}>
                  <Grid item className={Styles.socials}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={12} md={9} lg={11} xl={9}>
                <Item className={Styles.banner_text_div}>
                  <Typography className={Styles.banner_text_para_one}>
                    Online CV and Professional Resume Maker
                  </Typography>
                  <Typography className={Styles.banner_text_heading}>
                    Create a job-ready <br />{" "}
                    <Typography
                      className={Styles.banner_text_heading_span}
                      component="span"
                    >
                      Resume
                    </Typography>{" "}
                    in minutes.
                  </Typography>
                  <Typography className={Styles.banner_text_para_two}>
                    The #1 resume & CV builder, trusted by 2+ million people{" "}
                    <br /> to land their dream job.
                  </Typography>
                  <Button className={Styles.google_sign_up_button}>
                    <Image
                      src="/assets/images/google.png"
                      width="23.45px"
                      height="24px"
                      alt="google logo"
                    />{" "}
                    <span className={Styles.google_sign_up_text}>Sign up with Google</span>
                  </Button>
                  <Button className={Styles.linkedin_sign_up_button}>
                    <Image
                      src="/assets/images/linkedin.png"
                      width="23.45px"
                      height="24px"
                      alt="linkedin logo"
                    />{" "}
                    <span className={Styles.linkedin_sign_up_text}>Sign up with LinkedIn</span>
                  </Button>
                  <Typography className={Styles.sign_up_text}>
                    Or sign up with{" "}
                    <Typography
                      component="span"
                      className={Styles.banner_text_email}
                    >
                      email
                    </Typography>
                  </Typography>
                </Item>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={7} xl={7}>
            <Item className={Styles.background_second}>
              <Image
                src="/assets/images/banner.png"
                width="560.14px"
                height="400px"
                alt=""
              />
              <Button className={Styles.explore}>
                Explore<span className="icon-right"></span>
                <span className="icon-right after"></span>
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
