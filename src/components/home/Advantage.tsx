import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Styles from "../../styles/Advantage.module.css";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));
const Advantage = () => {
  return (
    <Box className={Styles.advantage_section}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Item>
                <Typography className={Styles.advantage_text_heading}>
                  Advantages to using our CV builder
                  <span className={Styles.advantage_text_heading_dot}>.</span>
                </Typography>
                <Typography className={Styles.advantage_text_para}>
                  Creating a winning document with our CV maker is easy and can
                  be done in minutes. Here are 6 reasons why OnlineCV <br /> can
                  quickly help you design your best CV ever:
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageiconone.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          Easy to use CV builder
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          Use the intuitive CV builder to quickly add CV
                          content, change{" "}
                          <span className={Styles.advantage_card_para_span}>
                            CV templates
                          </span>{" "}
                          and customize fonts. No download required!
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageicontwo.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          Job-Specific Phrases
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          We did the heavy lifting for you. Our expert CV
                          writers have crafted job-specific phrases across 100s
                          of industries.
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageiconthree.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          Fast Easy Formatting
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          Our advanced CV builder allows you to format your CV
                          fast and easy every time. And even if you change the
                          CV template.
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageiconfour.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          Pro Resume Templates
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          Whatever resume template you're looking for, we've got
                          it! Whether it's a classic black-and-white template,
                          or something a bit more
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageiconfive.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          NO Hidden Fees
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          Our resume builder will notify you if you’re using any
                          of our premium features in advance. Just to be hit
                          with a hidden paywall.
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <Item>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12} lg={3} xl={3}>
                      <Item>
                        <Image
                          src="/assets/images/advantageiconsix.png"
                          width="83.73px"
                          height="80px"
                          alt="advantage one"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={9} xl={9}>
                      <Item className={Styles.advantage_card_div}>
                        <Typography className={Styles.advantage_card_heading}>
                          Step by Step Expert Tips
                        </Typography>
                        <Typography className={Styles.advantage_card_para}>
                          We have done the research and digested the modern job
                          market for you. Our CV builder is loaded with step by
                          step.
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                    <Button className={Styles.advantage_button}>Start Now</Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Advantage;
