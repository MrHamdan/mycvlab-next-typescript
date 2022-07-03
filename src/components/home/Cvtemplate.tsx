import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Styles from "../../styles/Cvtemplate.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));


const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 5,
  speed: 1000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
};


const Cvtemplate = () => {
  return (
    <div>
      <Box className={Styles.cv_template_background}>
        <Container maxWidth="lg">
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
              <Grid
                item
                xs={12}
                md={12}
                lg={9}
                xl={9}
              >
                <Item>
                  <div>
                    <Slider {...settings}>
                      <div>
                        <Image
                          src="/assets/images/cv-one.png"
                          width="137px"
                          height="184px"
                          alt="cv image"
                        />
                      </div>
                      <div>
                        <Image
                          src="/assets/images/cv-two.png"
                          width="130px"
                          height="184px"
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          src="/assets/images/cv-three.png"
                          width="137px"
                          height="184px"
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          src="/assets/images/cv-four.png"
                          width="137px"
                          height="184px"
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          src="/assets/images/cv-five.png"
                          width="137px"
                          height="184px"
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          src="/assets/images/cv-four.png"
                          width="137px"
                          height="184px"
                          alt=""
                        />
                      </div>
                    </Slider>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Cvtemplate;
