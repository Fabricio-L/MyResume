import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core'

const usesStyle = makeStyles(myTheme => ({
    root: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#F0EEEE",
      alignItems: "center",
      justifyContent: "center"
    },
    myContainer: {
      border: "solid 2px",
      borderRadius: "30px",
      background: "white",
      alignItems: "center",
      textAlign: "center",
      [myTheme.breakpoints.down('sm')]: {
        width: "350px",
      },
      [myTheme.breakpoints.between('sm', 'md')]: {
        width: "350px"
      },
      [myTheme.breakpoints.between('md', 'lg')]: {
        width: "800px"
      },
      [myTheme.breakpoints.up('lg')]: {
        width: "800px"
      }
    },
    myParagraph: {
      color: "#4f11d2b8",
      margin: "15px"
    },
    mailContainer: {
      background: "#DBFF00",
      border: "solid 2px",
      borderRadius: "10px",
      padding: "13px 130px",
      [myTheme.breakpoints.down('sm')]: {
        width: "90%",
      },
      [myTheme.breakpoints.between('sm', 'md')]: {
        width: "90%"
      },
      [myTheme.breakpoints.between('md', 'lg')]: {
        width: "60%"
      },
      [myTheme.breakpoints.up('lg')]: {
        width: "60%"
      }
    },
    cvContainer: {
      padding: "0 !important",
      marginTop: "13px",
      marginBottom: "23px",
      [myTheme.breakpoints.down('sm')]: {
        width: "90%",
      },
      [myTheme.breakpoints.between('sm', 'md')]: {
        width: "90%"
      },
      [myTheme.breakpoints.between('md', 'lg')]: {
        width: "60%"
      },
      [myTheme.breakpoints.up('lg')]: {
        width: "60%"
      }
    },
    textContainer: {
      display: "flex",
      flexDirection: "row"
    },
    cvText: {
      background: "#4f11d2b8",
      border: "solid 2px",
      borderRadius: "13px",
      padding: "12px 10px",
      width: "48%",
      color: "#000000",
      textDecoration: "none"
    }
}))

const Contact = () => {
    const classes = usesStyle()

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="column" className={classes.myContainer}>
              
              <Grid item md={12}>
                <Typography variant="h4" className={classes.myParagraph}>Send me an email</Typography>
              </Grid>
              
              <Grid item md={12} className={classes.mailContainer}>
                <span style={{color: "#4f11d2b8"}}>fabri.lkt@gmail.com</span>
              </Grid>

              <Grid item lg={12} md={12} sm={12} className={classes.cvContainer} direction="row">
                <div className={classes.textContainer}>
                  <a className={classes.cvText} style={{marginRight: "2%"}} href='https://firebasestorage.googleapis.com/v0/b/myresume-b9b45.appspot.com/o/Cv-Español-Fabricio.pdf?alt=media&token=ccb6a8f4-10d9-4877-9619-b4b1d289adb6' target="_blank" download>
                    <div>
                      Cv (spanish)
                    </div>
                  </a>
                  <div className={classes.cvText}>
                    Resume (english)
                  </div>
                </div>
              </Grid>
              
            </Grid>
        </div>
    )
}

export default Contact