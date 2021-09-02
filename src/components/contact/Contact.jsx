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
        width: "800px",
        border: "solid 2px",
        borderRadius: "30px",
        background: "white",
        alignItems: "center",
        textAlign: "center"
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
      width: "60%"
    },
    cvContainer: {
      width: "60%",
      padding: "0 !important",
      marginTop: "13px",
      marginBottom: "23px"
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
      width: "48%"
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
                  <div className={classes.cvText} style={{marginRight: "2%"}}>
                    Cv (spanish)
                  </div>
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