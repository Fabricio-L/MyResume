import { makeStyles, Typography, Button, Grid, CardContent } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import Navbar from './components/navbar/Navbar'

const useStyle = makeStyles( (theme) => ({
  mainBackground: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    background: "linear-gradient(to right bottom, #40B4F5, #4F11D2 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"
  },
  mainConteiner: {
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: "4em",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "4em",
    }
  },
  myConteiner: {
    display: "flex",
    padding: "0 !important",
    backgroundColor: "#FFFFFF",
    border: "solid 4px #000000",
    borderRadius: "6.5em",
    boxShadow: "20px 20px 0px 0px #dbff00, 20px 20px 0px 4px #000000",
    marginRight: "2em"
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
    marginLeft: "10px"
  },
  myDiv: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: "center",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: "flex-end",
    }
  },
  imgResponsive: {
    [theme.breakpoints.down('sm')]: {
      width: "275px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "275px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "375px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "375px",
    }
  }
}))

function App() {
  const classes = useStyle()

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.mainBackground}>
        <Navbar />
        <Grid container direction="row" spacing={1} className={classes.mainConteiner}>

            <Grid item xl={4} md={4} xs={12} sm={12} className={classes.myDiv}>
              <CardContent className={classes.myConteiner}>
                <img src="avatar.svg" alt="Avatar" className={classes.imgResponsive} />
              </CardContent>
            </Grid>
            
            <Grid item xl={4} md={4} xs={12} sm={12} style={{marginTop: "2em"}}>
              <Typography variant="h6" color="initial" className={classes.myParagraph}>
                Hi im, a developer and product designer from Ireland. I'm interested in React, Node, Product Design, Jamstack, Startups, Cryptocurrencies and Music.
              </Typography>
              <Button variant="contained" color="primary" className={classes.myButton}>
                Hire me!
              </Button>
            </Grid>

        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;