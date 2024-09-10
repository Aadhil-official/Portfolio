// import { BrowserRouter } from "react-router-dom"
import "./styles.css"
import React from "react"
import Hello from '../../assets/Hello.gif'
import { Grid, Typography } from "@mui/material"
import ScrollAnimation from "react-animate-on-scroll"
import ReactTypingEffect from "react-typing-effect"
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// import LinkedIn from '../../assets/Linkedin.png';
import GIT from '../../assets/github.png';
import Inst from '../../assets/instagram.png';
import WP from '../../assets/whatsapp.png';

function Hero() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Grid container position='absolute'>
        <Grid item xs={12} sx={{ display: "block", marginRight: '5px' }} textAlign='right'>
          {/* <img src={LinkedIn} alt="LinkedIn" width="40px"/> */}
          <img src={GIT} alt="Git" width="40px" />
          <img src={WP} alt="Whatsapp" width="40px" />
          <img src={Inst} alt="Instagram" width="40px" />
        </Grid>
      </Grid>
      <Grid container id="home">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
          <Typography variant="h5" className="toppart">
            Hello <img src={Hello} alt="Hello" width="30px" />, I'm<br />
          </Typography><br /><br />
        </Grid>

        {/* <Grid item xl={3} lg={3} md={2} sm={3} xs={3}></Grid> */}
        <ThemeProvider theme={theme}>
          <Grid item xl={3} lg={4} md={5} sm={7} xs={12} >
            <Typography
              variant="h1"
              className="myname animate fadeInUp"
              style={{ animationDelay: "0.2s", fontWeight: 'bolder', marginLeft: '80px' }}
              position='absolute'
            >
              Aadhil
            </Typography>
            <ScrollAnimation animateIn="fadeInUp" className="animate" delay={0.2 * 1000}>
              <Typography variant="h1" className="myname" style={{ fontWeight: 'bolder', marginLeft: '80px' }}>
                Aadhil
              </Typography>
            </ScrollAnimation>
            <Typography
              variant="h5"
              className="sub animate1 fadeInUp1"
              position='absolute'
            >
              <ReactTypingEffect
                text="Full Stack Developer"
                speed={20}
                eraseSpeed={0}
                typingDelay={30}
              />
            </Typography>

            <Typography
              variant="h5"
              className="sub animate1 fadeInUp2"
              position='absolute'
            >
              Full Stack Developer
            </Typography>
            <ScrollAnimation animateIn="fadeInUp" className="animate" delay={0.1 * 1000}>
              <Typography variant="h5" className="sub">
                Full Stack Developer
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" className="animate" delay={0.1 * 1000}>
              <Typography variant="body2" className="sub1">
                Reading Information Technology and Management digree at UOM
              </Typography>
            </ScrollAnimation>
          </Grid>

          <Grid item xl={3} lg={2} md={2} sm={2} xs={12}></Grid>

          <Grid item xl={3} lg={3} md={3} sm={0} xs={0}>
            {/* <img src={Illustration} alt="Illustration png"
              style={{ position: 'absolute', animationDelay: "0.5s" }}
              className="illustration animate fadeInRight"
            /> */}
            <img src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif"
              style={{ width: "350px", position: 'absolute', animationDelay: "0.5s" }}
              className="illustration animate fadeInRight"
            />
            {/* <ScrollAnimation animateIn="fadeInRight" className="animate" delay={0.2 * 1000}> */}
            {/* <img src={Illustration} className="illustration" alt="Illustration png" /> */}
            {/* </ScrollAnimation> */}
          </Grid>
        </ThemeProvider>
      </Grid >
    </>
  )
}

export default Hero;