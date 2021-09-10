import React from 'react'
import { Typography, makeStyles, Grid, Tooltip, ClickAwayListener } from '@material-ui/core'

import CopyIcon from '@material-ui/icons/FileCopy';

const usesStyle = makeStyles(myTheme => ({
    root: {
      display: "flex",
      minHeight: "60vh",
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
        width: "700px"
      },
      [myTheme.breakpoints.up('lg')]: {
        width: "700px"
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
      marginBottom: "30px",
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

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
      navigator.clipboard.writeText('nicolaslukestik@gmail.com')
    };

    return (
        <div id="Contact" className={classes.root}>
            <Grid container spacing={3} direction="column" className={classes.myContainer}>
              
              <Grid item md={12}>
                <Typography variant="h4" className={classes.myParagraph}>Send me an email</Typography>
              </Grid>
              
              <Grid item md={12} className={classes.mailContainer}>
                <span style={{color: "#4f11d2b8"}}>fabri.lkt@gmail.com</span>
                
                <ClickAwayListener onClickAway={handleTooltipClose}>
									<Tooltip
										arrow
										placement="right"
										open={open}
										disableTouchListener
										title="Copied to Clipboard">
										<Button 
											// className={classes.copyBtn}
											disableRipple 
											onClick={handleTooltipOpen}>
											<CopyIcon />
										</Button>
									</Tooltip>
							  </ClickAwayListener>
              </Grid>

              <Grid item lg={12} md={12} sm={12} className={classes.cvContainer} direction="row">
                <div className={classes.textContainer}>
                  <a className={classes.cvText} style={{marginRight: "2%"}} href="Cv-Fabricio-Lukestik.pdf" download>
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