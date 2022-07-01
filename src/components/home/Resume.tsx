import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Styles from "../../styles/Resume.module.css";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Resume = () => {
  return (
    <Box className={Styles.resume_section}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Item>
                <Typography>
                  <Typography className={Styles.resume_text_heading}>
                    Resume Builder Articles
                    <span className={Styles.resume_text_heading_dot}>.</span>
                  </Typography>
                  <Typography className={Styles.resume_text_para}>
                    Creating a winning document with our CV maker is easy and
                    can be done in minutes. Here are 6 reasons why OnlineCV{" "}
                    <br /> can quickly help you design your best CV ever:
                  </Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={4}>
              <Item className={Styles.resume_card_div}>
                <Image
                  src="/assets/images/resumeone.png"
                  width="352px"
                  height="200px"
                  alt="resume image"
                />
                <Typography className={Styles.resume_tag_div}>
                  <Typography component="span" className={Styles.resume_tags}>
                    #RESUME
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #HELP
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #FAQ
                  </Typography>
                </Typography>
                <Typography className={Styles.resume_card_heading}>
                  Why should I use a resume builder?
                </Typography>
                <Typography className={Styles.resume_card_para}>
                  Using a resume builder makes the process of creating a resume
                  significantly faster and easier.{" "}
                  <span className={Styles.resume_card_span}>Read more</span>
                </Typography>
                <Divider className={Styles.resume_divider} />
                <Typography>
                  <Typography component="span" className={Styles.resume_date}>
                    SEPTEMBER 23, 2021
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_dot}
                  >
                    .
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_name}
                  >
                    JOHN DOE
                  </Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={4}>
              <Item className={Styles.resume_card_div}>
                <Image
                  src="/assets/images/resumeone.png"
                  width="352px"
                  height="200px"
                  alt="resume image"
                />
                <Typography className={Styles.resume_tag_div}>
                  <Typography component="span" className={Styles.resume_tags}>
                    #RESUME
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #HELP
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #FAQ
                  </Typography>
                </Typography>
                <Typography className={Styles.resume_card_heading}>
                  What is a resume?
                </Typography>
                <Typography className={Styles.resume_card_para}>
                  A resume (also known as a CV, or curriculum vitae) is a 1-2
                  page document that summarizes your work.
                  <span className={Styles.resume_card_span}> Read more</span>
                </Typography>
                <Divider className={Styles.resume_divider} />
                <Typography>
                  <Typography component="span" className={Styles.resume_date}>
                    SEPTEMBER 23, 2021
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_dot}
                  >
                    .
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_name}
                  >
                    JOHN DOE
                  </Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={4}>
              <Item className={Styles.resume_card_div}>
                <Image
                  src="/assets/images/resumeone.png"
                  width="352px"
                  height="200px"
                  alt="resume image"
                />
                <Typography className={Styles.resume_tag_div}>
                  <Typography component="span" className={Styles.resume_tags}>
                    #COVER LATTER
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #HELP
                  </Typography>
                  <Typography component="span" className={Styles.resume_tags}>
                    #FAQ
                  </Typography>
                </Typography>
                <Typography className={Styles.resume_card_heading}>
                  How can I create my Cover Latter?
                </Typography>
                <Typography className={Styles.resume_card_para}>
                  Then, you’ll be forwarded to our resume builder, where all you
                  have to do is fill in your resume content!
                  <span className={Styles.resume_card_span}> Read more</span>
                </Typography>
                <Divider className={Styles.resume_divider} />
                <Typography>
                  <Typography component="span" className={Styles.resume_date}>
                    SEPTEMBER 23, 2021
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_dot}
                  >
                    .
                  </Typography>
                  <Typography
                    component="span"
                    className={Styles.resume_date_name}
                  >
                    JOHN DOE
                  </Typography>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
