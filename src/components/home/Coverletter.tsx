import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "../../styles/Coverletter.module.css";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Coverletter = () => {
  return (
    <div>
      <Box className={Styles.cover_section}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={5} xl={5}>
                <Item>
                  <Image
                    src="/assets/images/coverletter.png"
                    width="306px"
                    height="424px"
                    alt="cover letter"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={12} lg={7} xl={7} className={Styles.cover_text_div}>
                <Item className={Styles.cover_text}>
                  <Typography className={Styles.cover_text_heading}>
                    Craft a compelling cover letter in just 15 minutes
                  </Typography>
                  <Typography className={Styles.cover_text_para}>
                    A strong cover letter is the one thing that will help you
                    stand out from the crowd and beat the competition for the
                    role you are applying for. We have created 100s of cover
                    letter templates to help alleviate the pressure and ease
                    overwhelm. In just 15 minutes, you can have a ready-to-go,
                    job-winning cover letter to go with your CV.
                  </Typography>
                  <Button className={Styles.cover_button}>BUILD MY COVER LETTER</Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Coverletter;
