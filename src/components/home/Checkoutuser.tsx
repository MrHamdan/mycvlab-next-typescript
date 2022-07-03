import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Styles from "../../styles/Checkoutuser.module.css";
import Image from "next/image";
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};


const Checkoutuser = () => {
  return (
    <Box className={Styles.checkout_section}>
      <Container maxWidth="lg">
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
                    Creating a winning document with our CV maker is easy and
                    can be done in minutes. Here are 6 reasons why OnlineCV{" "}
                    <br /> can quickly help you design your best CV ever:
                  </Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={3} xl={3}>
              <Item className={Styles.checkout_review_div}>
                <Typography className={Styles.checkout_rating_text}>
                  4.5 of 5
                </Typography>
                <Box className={Styles.checkout_image_box}>
                  <Image
                    src="/assets/images/ratings.png"
                    width="139.2px"
                    height="24px"
                    alt="ratings image"
                  />
                  <Typography className={Styles.checkout_rating_para}>
                    Based on{" "}
                    <span className={Styles.checkout_rating_para_span}>
                      955 reviews on
                    </span>
                  </Typography>
                  <Image
                    src="/assets/images/trustlogo.png"
                    width="162.93px"
                    height="40px"
                    alt="trustlogo"
                  />
                  <br />
                  <Button className={Styles.checkout_review_button}>
                    WRITE A REVIEW
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={9} xl={9}>
              <Item>
                <div>
                  <Slider {...settings}>
                    <div>
                      <Box className={Styles.checkout_card}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Item>
                                <Image
                                  src="/assets/images/userone.png"
                                  width="64px"
                                  height="64px"
                                  alt="user image"
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={9}>
                              <Item className={Styles.checkout_texts}>
                                <Image
                                  src="/assets/images/ratingfive.png"
                                  width="82.29px"
                                  height="16px"
                                  alt="rating image"
                                />
                                <Typography
                                  className={Styles.checkout_colored_text}
                                >
                                  Paula Brown
                                  <span
                                    className={Styles.checkout_colored_span}
                                  >
                                    reviewed
                                  </span>
                                  MYCVLAB
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={12}>
                              <Item className={Styles.checkout_para}>
                                <Typography
                                  className={Styles.checkout_review_text_para}
                                >
                                  Catherine have a very good customer service
                                  and very patient with customers and your
                                  system is perfect and user friendly but i
                                  personally have financial problems that is why
                                  I couldnt keep up with my subscription
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>
                    <div>
                      <Box className={Styles.checkout_card}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Item>
                                <Image
                                  src="/assets/images/userone.png"
                                  width="64px"
                                  height="64px"
                                  alt="user image"
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={9}>
                              <Item className={Styles.checkout_texts}>
                                <Image
                                  src="/assets/images/ratingfive.png"
                                  width="82.29px"
                                  height="16px"
                                  alt="rating image"
                                />
                                <Typography
                                  className={Styles.checkout_colored_text}
                                >
                                  Paula Brown
                                  <span
                                    className={Styles.checkout_colored_span}
                                  >
                                    reviewed
                                  </span>
                                  MYCVLAB
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={12}>
                              <Item className={Styles.checkout_para}>
                                <Typography
                                  className={Styles.checkout_review_text_para}
                                >
                                  Catherine have a very good customer service
                                  and very patient with customers and your
                                  system is perfect and user friendly but i
                                  personally have financial problems that is why
                                  I couldnt keep up with my subscription
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>
                    <div>
                      <Box className={Styles.checkout_card}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Item>
                                <Image
                                  src="/assets/images/userone.png"
                                  width="64px"
                                  height="64px"
                                  alt="user image"
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={9}>
                              <Item className={Styles.checkout_texts}>
                                <Image
                                  src="/assets/images/ratingfive.png"
                                  width="82.29px"
                                  height="16px"
                                  alt="rating image"
                                />
                                <Typography
                                  className={Styles.checkout_colored_text}
                                >
                                  Paula Brown
                                  <span
                                    className={Styles.checkout_colored_span}
                                  >
                                    reviewed
                                  </span>
                                  MYCVLAB
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={12}>
                              <Item className={Styles.checkout_para}>
                                <Typography
                                  className={Styles.checkout_review_text_para}
                                >
                                  Catherine have a very good customer service
                                  and very patient with customers and your
                                  system is perfect and user friendly but i
                                  personally have financial problems that is why
                                  I couldnt keep up with my subscription
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>
                    <div>
                      <Box className={Styles.checkout_card}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Item>
                                <Image
                                  src="/assets/images/userone.png"
                                  width="64px"
                                  height="64px"
                                  alt="user image"
                                />
                              </Item>
                            </Grid>
                            <Grid item xs={9}>
                              <Item className={Styles.checkout_texts}>
                                <Image
                                  src="/assets/images/ratingfive.png"
                                  width="82.29px"
                                  height="16px"
                                  alt="rating image"
                                />
                                <Typography
                                  className={Styles.checkout_colored_text}
                                >
                                  Paula Brown
                                  <span
                                    className={Styles.checkout_colored_span}
                                  >
                                    reviewed
                                  </span>
                                  MYCVLAB
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={12}>
                              <Item className={Styles.checkout_para}>
                                <Typography
                                  className={Styles.checkout_review_text_para}
                                >
                                  Catherine have a very good customer service
                                  and very patient with customers and your
                                  system is perfect and user friendly but i
                                  personally have financial problems that is why
                                  I couldnt keep up with my subscription
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>
                  </Slider>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={3} xl={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12} md={12} lg={7} xl={7}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12} md={12} lg={2} xl={2}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12} md={12} lg={3} xl={3}>
              <Item className={Styles.checkout_hired_div}>
                <Typography className={Styles.checkout_hired_para}>
                  Our customers have been <br /> hired by: *
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={9} xl={9}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/googlelogo.png"
                          width="98.04px"
                          height="32px"
                          alt="google logo"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/uklogo.png"
                          width="121.89px"
                          height="32px"
                          alt="uk logo"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/uksportlogo.png"
                          width="72.03px"
                          height="32px"
                          alt="uksportlogo"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/bbclogo.png"
                          width="107.65px"
                          height="32px"
                          alt="bbclogo"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/ukpluslogo.png"
                          width="57.79px"
                          height="32px"
                          alt="ukpluslogo"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} xl={2}>
                      <Item>
                        <Image
                          src="/assets/images/witneylogo.png"
                          width="77.04px"
                          height="32px"
                          alt="witneylogo"
                        />
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography className={Styles.checkout_review_text_para}>
                  *The names and logos of the companies referred to above are
                  all trademarks of their respective holders. Unless
                  specifically stated otherwise, such references are not
                  intended to imply any affiliation or association with
                  myperfectCV.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Checkoutuser;
