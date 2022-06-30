import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Styles from "../../styles/Stats.module.css";
import Image from "next/image";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

const Stats = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Box className={Styles.stats_div}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item>
                  <Box className={Styles.stats_div_text_icon}>
                    <Box className={Styles.stats_icon}>
                      <Image
                        src="/assets/images/tick.png"
                        width="48px"
                        height="48px"
                        alt="tick"
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography className={Styles.stats_heading}>
                        5934<span className={Styles.stats_text_span}>+</span>
                      </Typography>
                      <Typography className={Styles.stats_para}>
                        Copleted CV
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item>
                  <Box className={Styles.stats_div_text_icon}>
                    <Box className={Styles.stats_icon}>
                      <Image
                        src="/assets/images/tick.png"
                        width="48px"
                        height="48px"
                        alt="tick"
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography className={Styles.stats_heading}>
                        4934<span className={Styles.stats_text_span}>+</span>
                      </Typography>
                      <Typography className={Styles.stats_para}>
                        Satified Clients
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item>
                  <Box className={Styles.stats_div_text_icon}>
                    <Box className={Styles.stats_icon}>
                      <Image
                        src="/assets/images/tick.png"
                        width="48px"
                        height="48px"
                        alt="tick"
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography className={Styles.stats_heading}>
                        2578<span className={Styles.stats_text_span}>+</span>
                      </Typography>
                      <Typography className={Styles.stats_para}>
                        5 Stars Reviews
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Item>
                  <Box className={Styles.stats_div_text_icon}>
                    <Box className={Styles.stats_icon}>
                      <Image
                        src="/assets/images/tick.png"
                        width="48px"
                        height="48px"
                        alt="tick"
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography className={Styles.stats_heading}>
                        4994<span className={Styles.stats_text_span}>+</span>
                      </Typography>
                      <Typography className={Styles.stats_para}>
                        Downloaded CV
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Stats;
