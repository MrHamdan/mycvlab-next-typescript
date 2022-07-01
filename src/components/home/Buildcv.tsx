import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Styles from "../../styles/Buildcv.module.css";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Buildcv = () => {
  return (
    <div>
      <Box className={Styles.build_section}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Item className={Styles.build_div}>
                  <Typography className={Styles.build_text_heading}>
                    Build Your CV Fast & 4 Easy Steps
                    <span className={Styles.build_text_heading_dot}>.</span>
                  </Typography>
                  <Typography className={Styles.build_text_para}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. <br />
                    Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} className={Styles.build_section}>
                    <Box className={Styles.build_line}>
                      <Image
                        src="/assets/images/line.png"
                        width="787px"
                        height="2px"
                        alt="line"
                      />
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12} lg={3} xl={3}>
                        <Item className={Styles.build_card_div}>
                          <Box className={Styles.build_image_design}>
                            <Image
                              src="/assets/images/one.png"
                              width="40px"
                              height="40px"
                              alt="build icon one"
                            />
                          </Box>
                          <Typography className={Styles.number_para}>
                            <span className={Styles.build_number_design}>
                              1
                            </span>
                          </Typography>
                          <Typography className={Styles.build_card_heading}>
                            Pick a Template
                          </Typography>
                          <Typography className={Styles.build_card_para}>
                            Dont sabotage your job search before it has even
                            begun. Choose from our ATS-friendly, hand-crafted
                            resume templates
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12} lg={3} xl={3}>
                        <Item className={Styles.build_card_div}>
                          <Box className={Styles.build_image_design}>
                            <Image
                              src="/assets/images/two.png"
                              width="40px"
                              height="40px"
                              alt="build icon two"
                            />
                          </Box>
                          <Typography className={Styles.number_para}>
                            <span className={Styles.build_number_design}>
                              2
                            </span>
                          </Typography>
                          <Typography className={Styles.build_card_heading}>
                            Customize Your Layout
                          </Typography>
                          <Typography className={Styles.build_card_para}>
                            Dont sabotage your job search before it has even
                            begun. Choose from our ATS-friendly, hand-crafted
                            resume templates
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12} lg={3} xl={3}>
                        <Item className={Styles.build_card_div}>
                          <Box className={Styles.build_image_design}>
                            <Image
                              src="/assets/images/three.png"
                              width="40px"
                              height="40px"
                              alt="build icon three"
                            />
                          </Box>
                          <Typography className={Styles.number_para}>
                            <span className={Styles.build_number_design}>
                              3
                            </span>
                          </Typography>
                          <Typography className={Styles.build_card_heading}>
                            Fill in the Blanks
                          </Typography>
                          <Typography className={Styles.build_card_para}>
                            Dont sabotage your job search before it has even
                            begun. Choose from our ATS-friendly, hand-crafted
                            resume templates
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12} lg={3} xl={3}>
                        <Item className={Styles.build_card_div}>
                          <Box className={Styles.build_image_design}>
                            <Image
                              src="/assets/images/four.png"
                              width="40px"
                              height="40px"
                              alt="build icon four"
                            />
                          </Box>
                          <Typography className={Styles.number_para}>
                            <span className={Styles.build_number_design}>
                              4
                            </span>
                          </Typography>
                          <Typography className={Styles.build_card_heading}>
                            Hit Download!
                          </Typography>
                          <Typography className={Styles.build_card_para}>
                            Dont sabotage your job search before it has even
                            begun. Choose from our ATS-friendly, hand-crafted
                            resume templates
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Buildcv;
