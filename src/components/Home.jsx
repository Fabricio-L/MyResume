import { makeStyles, Typography, Button, Grid, CardContent, Grow, Link } from '@material-ui/core'

const useStyle = makeStyles( (theme) => ({
  mainConteiner: {
    justifyContent: "center"
  },
  myConteiner: {
    display: "flex",
    padding: "0 !important",
    backgroundColor: "#FFFFFF",
    border: "solid 4px #000000",
    boxShadow: "20px 20px 0px 0px #dbff00, 20px 20px 0px 4px #000000",
    [theme.breakpoints.down('sm')]: {
        borderRadius: "5.5em"
    },
    [theme.breakpoints.between('sm', 'md')]: {
        borderRadius: "5.5em"
    },
    [theme.breakpoints.between('md', 'lg')]: {
        borderRadius: "6.5em"
    },
    [theme.breakpoints.up('lg')]: {
        borderRadius: "6.5em"
    }
  },
  myImg: {
    width: "100%",
    borderRadius: "10px"
  },
  myParagraph: {
    margin: "auto",
    color: "#ffffff",
    padding : "15px",
    fontFamily: "monospace",
    [theme.breakpoints.down('sm')]: {
      fontSize: "18px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: "18px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "28px",
    }
  },
  myButton: {
    display: "flex",
    justifyContent: "flex-start",
    width: "fit-content",
    borderRadius: "6.5em",
    boxShadow: "9px 9px 0px 0px #dbff00, 9px 9px 0px 3px #000000",
    border: "solid 3px #000",
    color: "#000",
    marginLeft: "10px",
    padding: "6px 50px !important",
    [theme.breakpoints.down('sm')]: {
        fontSize: "11px",
        padding: "5px 40px !important"
      },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: "11px",
        padding: "5px 40px !important"
    }
  },
  myDiv: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
        marginRight: "1em"
    },
    [theme.breakpoints.between('sm', 'md')]: {
        justifyContent: "center",
        marginRight: "1em"
    },
    [theme.breakpoints.between('md', 'lg')]: {
        justifyContent: "flex-end",
        marginRight: "3em"
    },
    [theme.breakpoints.up('lg')]: {
        justifyContent: "flex-end",
        marginRight: "3em"
    }
  },
  imgResponsive: {
    [theme.breakpoints.down('sm')]: {
      width: "250px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "250px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "340px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "340px",
    }
  },
  iconLinkContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    bottom: "2em",
    right: "2em",
    [theme.breakpoints.down('sm')]: {
      bottom: "1em",
      right: "1em",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      bottom: "1em",
      right: "1em",
    }
  },
  iconItem: {
    padding: "0 !important"
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      width: "40px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "40px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "70px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "70px",
    }
  }
}))

function Home() {
  const classes = useStyle()

  return (
    <div className={classes.scrollSection}>
        <Grid container direction="row" spacing={1} className={classes.mainConteiner}>
            <Grid item xl={4} md={4} xs={12} sm={12} className={classes.myDiv}>
                <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
                    <CardContent className={classes.myConteiner}>
                        <img src="avatar.svg" alt="Avatar" className={classes.imgResponsive} />
                    </CardContent>
                </Grow>
            </Grid>
            
            <Grid item xl={6} md={6} xs={12} sm={12} style={{marginTop: "2em"}}>
                <Grow in={true} {...(true ? { timeout: 2000 } : {})}>
                <Typography variant="h6" color="initial" className={classes.myParagraph}>
                  Hello i'm Fabricio. I am a web developer, specialist in React and Javascript, passionate about design and innovation.
                </Typography>
                </Grow>
                <Grow in={true} {...(true ? { timeout: 3000 } : {})}>
                <Button href="#Contact" variant="contained" color="primary" className={classes.myButton}>
                    Hire me!
                </Button>
                </Grow>
            </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.iconLinkContainer}>
            <Grid item className={classes.iconItem}>
              <Link href="https://github.com/Fabricio-L" target="_blank">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" className={classes.icons}><circle cx="50" cy="50" r="34" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3"/>
                    <path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M66.507,73.236 C61.849,76.551,56.152,78.5,50,78.5c-15.74,0-28.5-12.76-28.5-28.5S34.26,21.5,50,21.5S78.5,34.26,78.5,50 c0,2.936-0.444,5.769-1.269,8.434"/>
                    <path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M70.79,69.494 c-0.683,0.728-1.404,1.42-2.16,2.074"/>
                    <path fill="none" stroke="#dbff00" stroke-linecap="round" stroke-miterlimit="10" d="M76.527,60.441 c-1.006,2.555-2.371,4.929-4.033,7.062"/>
                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.5,77.1l0-9.445 c0-2.718-1.681-5.092-4-6.155h2.449c6.908,0,12.507-5.553,12.507-12.461c0-3.321-1.305-6.334-3.419-8.573 c0.396-2.203,0.351-5.301-0.538-7.966c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4 c-0.8,2.401-1.087,5.233-0.846,7.295c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5 c-2.003,0.917-3.635,2.756-4,5c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46 s1.23,1.23,2.46,3.69C33.872,68.828,36.5,70.5,41.5,70.5v6.6"/>
                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.238,45.47 c0.447-1.098,1.105-2.109,1.954-2.99"/>
                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.661,50.52 c-0.076-0.482-0.115-0.977-0.115-1.48c0-0.512,0.04-1.017,0.118-1.512"/>
                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M41.456,58.414 c-3.325-0.565-6.068-2.862-7.264-5.926"/>
                </svg>
              </Link>
            </Grid>
            <Grid item className={classes.iconItem}>
                <Link href="https://www.linkedin.com/in/fabricio-lukestik/" target="_blank">
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" className={classes.icons}>
                      <path fill="#ffffff" stroke="#ffffff" d="M69.307,17.654h-39c-7.168,0-13,5.832-13,13v39c0,7.168,5.832,13,13,13h39c7.168,0,13-5.832,13-13v-39C82.307,23.485,76.476,17.654,69.307,17.654z M80.307,69.654c0,6.065-4.935,11-11,11h-39c-6.065,0-11-4.935-11-11v-39c0-6.065,4.935-11,11-11h39c6.065,0,11,4.935,11,11V69.654z"/>
                      <path fill="#dbff00" stroke="#dbff00" d="M76.807,47.654c-0.276,0-0.5,0.224-0.5,0.5v18.663c0,5.424-4.413,9.837-9.837,9.837H33.144c-5.424,0-9.837-4.413-9.837-9.837V33.49c0-5.424,4.413-9.837,9.837-9.837h33.663c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H33.144c-5.976,0-10.837,4.861-10.837,10.837v33.326c0,5.976,4.861,10.837,10.837,10.837H66.47c5.976,0,10.837-4.861,10.837-10.837V48.154C77.307,47.877,77.083,47.654,76.807,47.654z"/>
                      <path fill="#ffffff" stroke="#ffffff" d="M76.807 41.654c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5s.5-.224.5-.5v-4C77.307 41.877 77.083 41.654 76.807 41.654zM76.307 38.154v2c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-.276-.224-.5-.5-.5S76.307 37.877 76.307 38.154zM35.807 44.654c-.276 0-.5.224-.5.5v19c0 .276.224.5.5.5h6c.276 0 .5-.224.5-.5v-19c0-.276-.224-.5-.5-.5H35.807zM41.307 63.654h-5v-18h5V63.654zM38.825 35.695c-2.087 0-3.602 1.463-3.602 3.479s1.484 3.479 3.565 3.479c2.087 0 3.602-1.463 3.602-3.491C42.34 37.121 40.873 35.695 38.825 35.695zM38.753 41.654c-1.489 0-2.53-1.02-2.53-2.479 0-1.46 1.07-2.479 2.602-2.479 1.521 0 2.528.978 2.565 2.479C41.391 40.634 40.321 41.654 38.753 41.654zM45.375 64.506c.094.094.222.147.354.147h6.077c.276 0 .5-.224.5-.5V53.54c0-.612.059-1.067.176-1.354.243-.6 1-1.997 2.784-1.997 2.668 0 2.956 2.708 2.956 3.876l.083 10.092c.002.275.226.496.5.496h6c.276 0 .5-.224.5-.5V53.974c0-3.33-.821-5.838-2.441-7.456-1.32-1.318-3.099-1.986-5.288-1.986-2.2.013-3.983.669-5.271 2.05v-1.43c0-.276-.224-.5-.5-.5H45.73c-.137 0-.267.056-.362.155-.094.099-.144.232-.138.368.081 1.749 0 18.803 0 18.975C45.229 64.284 45.282 64.412 45.375 64.506zM46.243 45.654h5.064v2.304c-.056.141-.033.304.043.441.089.157.276.255.457.255.208 0 .386-.165.461-.364.73-1.2 2.077-2.756 5.292-2.756.006 0 .011 0 .017 0 1.915 0 3.457.57 4.582 1.693 1.425 1.423 2.148 3.693 2.148 6.748v9.679h-5.004l-.08-9.592c0-3.005-1.516-4.873-3.956-4.873-1.66 0-3.047.98-3.71 2.62-.168.412-.25.978-.25 1.731v10.113h-5.075C46.245 60.957 46.296 48.681 46.243 45.654z"/>
                  </svg>
                </Link>
                
            </Grid>
            <Grid item className={classes.iconItem}>
                <Link href="https://wa.me/3644355784" target="_blank">
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" className={classes.icons}>
                      <path fill="#ffffff" stroke="#ffffff" d="M70,82.988H31c-7.18,0-13-5.82-13-13v-39c0-7.18,5.82-13,13-13h39c7.18,0,13,5.82,13,13v39	C83,77.168,77.179,82.988,70,82.988z M20,30.988v39c0,6.075,4.925,11,11,11h39c6.075,0,11-4.925,11-11v-39c0-6.075-4.925-11-11-11	H31C24.924,19.988,20,24.913,20,30.988z"/>
                      <path fill="#dbff00" d="M67.162,77.988H33.837C27.852,77.988,23,73.136,23,67.151V33.825c0-5.985,4.852-10.837,10.837-10.837H67.5	c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H33.837c-5.433,0-9.837,4.404-9.837,9.837V67.15c0,5.433,4.405,9.838,9.838,9.838	h33.325c5.433,0,9.837-4.404,9.837-9.837V48.488c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V67.15	C78,73.136,73.147,77.988,67.162,77.988z M77.5,45.567c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5	v4C78,45.344,77.776,45.567,77.5,45.567z M77.5,39.567c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5	v2C78,39.344,77.776,39.567,77.5,39.567z"/>
                      <path fill="#ffffff" stroke="#ffffff" d="M56.627,60.335c-0.605,0-1.305-0.075-2.057-0.312c-0.806-0.252-1.709-0.553-2.852-1.039	c-4.12-1.758-7.112-5.381-8.529-7.384l-0.078-0.11C42.469,50.64,41,48.446,41,46.161c0-2.44,1.237-3.741,1.766-4.297l0.091-0.097	C43.499,41.075,44.245,41,44.535,41c0.336,0,0.672,0.004,0.966,0.019c0.576,0.021,1.12,0.132,1.545,1.139l0.555,1.331	c0.369,0.887,0.875,2.102,0.947,2.248c0.085,0.168,0.349,0.688,0.041,1.299l-0.064,0.131c-0.131,0.265-0.243,0.492-0.497,0.784	l-0.249,0.295c-0.179,0.216-0.358,0.431-0.515,0.584c-0.229,0.226-0.229,0.226-0.137,0.382c0.341,0.577,1.28,2.049,2.638,3.245	c1.51,1.33,2.802,1.884,3.496,2.182c0.146,0.062,0.265,0.113,0.352,0.156c0.324,0.16,0.36,0.118,0.469-0.004	c0.37-0.418,1.227-1.422,1.519-1.854c0.566-0.84,1.296-0.578,1.691-0.435c0.521,0.185,3.136,1.464,3.416,1.604l0.263,0.127	c0.396,0.188,0.709,0.338,0.886,0.629c0.263,0.428,0.156,1.632-0.243,2.738c-0.494,1.367-2.689,2.483-3.72,2.636	C57.546,60.286,57.117,60.335,56.627,60.335z M44.535,42c-0.124,0-0.56,0.032-0.946,0.448l-0.099,0.105	C43.007,43.062,42,44.12,42,46.161c0,1.982,1.328,3.956,1.898,4.713l0.107,0.149c1.356,1.917,4.212,5.38,8.105,7.041	c1.102,0.47,1.977,0.761,2.758,1.005c1.164,0.366,2.199,0.277,2.877,0.176c0.879-0.129,2.609-1.111,2.925-1.985	c0.347-0.958,0.36-1.754,0.308-1.925c-0.021-0.001-0.253-0.111-0.438-0.2l-0.277-0.134c-0.65-0.323-2.92-1.419-3.309-1.557	c-0.395-0.143-0.399-0.137-0.526,0.052c-0.344,0.51-1.292,1.61-1.597,1.956c-0.583,0.659-1.226,0.453-1.662,0.238	c-0.074-0.037-0.177-0.08-0.302-0.134c-0.692-0.297-2.134-0.914-3.764-2.351c-1.465-1.291-2.473-2.868-2.838-3.487	c-0.488-0.83,0.062-1.37,0.296-1.602c0.136-0.135,0.292-0.323,0.448-0.512l0.264-0.312c0.168-0.194,0.238-0.336,0.354-0.57	l0.069-0.138c0.052-0.104,0.061-0.198-0.042-0.401c-0.083-0.167-0.44-1.023-0.977-2.312l-0.554-1.326	c-0.224-0.53-0.353-0.524-0.533-0.527l-0.138-0.002C45.174,42.004,44.855,42,44.535,42z"/>
                      <path fill="#ffffff" stroke="#ffffff" d="M33,69c-0.134,0-0.264-0.054-0.359-0.152c-0.123-0.127-0.17-0.312-0.122-0.482l2.431-8.67	c-0.465-0.809-0.868-1.653-1.202-2.515c-0.262-0.674-0.484-1.365-0.662-2.056C32.697,53.62,32.5,52.063,32.5,50.5	C32.5,40.299,40.799,32,51,32s18.5,8.299,18.5,18.5S61.201,69,51,69c-3.088,0-6.143-0.778-8.846-2.253l-1.534,0.38	c-0.272,0.062-0.539-0.099-0.605-0.365c-0.066-0.269,0.098-0.539,0.365-0.605l1.725-0.427c0.126-0.03,0.253-0.013,0.364,0.049	C45.065,67.231,48.016,68,51,68c9.649,0,17.5-7.851,17.5-17.5S60.649,33,51,33s-17.5,7.851-17.5,17.5	c0,1.479,0.187,2.951,0.554,4.375c0.168,0.653,0.378,1.307,0.625,1.944c0.341,0.877,0.757,1.736,1.239,2.554	c0.069,0.117,0.088,0.258,0.051,0.389l-2.256,8.047l1.667-0.413c0.268-0.067,0.539,0.098,0.605,0.365s-0.097,0.539-0.365,0.605	l-2.5,0.619C33.08,68.995,33.04,69,33,69z"/>
                      <path fill="#ffffff" stroke="#ffffff" d="M37.5,67.885c-0.226,0-0.43-0.152-0.485-0.381c-0.066-0.268,0.098-0.539,0.366-0.604l0.999-0.247	c0.271-0.069,0.538,0.098,0.605,0.365c0.066,0.268-0.097,0.539-0.365,0.605l-1.001,0.247C37.579,67.88,37.539,67.885,37.5,67.885z"/>
                  </svg>
                </Link>
            </Grid>
        </Grid>
    </div>
  );
}

export default Home;
