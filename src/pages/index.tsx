import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Homepage from "../components/home/Homepage";

import styles from "../styles/Home.module.css";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

const Home: NextPage = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Head>
          {/* React Slick Link */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Font Awesome Link */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <Homepage />
      </StyledEngineProvider>
    </div>
  );
};

export default Home;
