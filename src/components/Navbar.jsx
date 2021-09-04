import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, makeStyles, Button, useScrollTrigger, Slide } from '@material-ui/core'

function HideOnScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({ target: window ? window() : undefined })
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
  
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const usesStyle = makeStyles(myTheme => ({
    offset: myTheme.mixins.toolbar,
    navColor: {
        background: "transparent",
        boxShadow: "none"
    },
    menuButton: {
        marginRight: myTheme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    myLink: {
        color: "white",
        textDecoration: "none"
    }
}))

const Navbar = (props) => {
    const classes = usesStyle()

    return (
        <div>
            <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.navColor}>
                    <Toolbar>
                        
                        {/* <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuRoundedIcon />
                        </IconButton> */}
                        
                        <Typography variant="h6" className={classes.title}>
                            Fabricio
                        </Typography>
                        
                        <Link className={classes.myLink} to="/"><Button color="inherit">Home</Button></Link>
                        <Link className={classes.myLink} to="/projects"><Button color="inherit">Projects</Button></Link>
                        <Link className={classes.myLink} to="/"><Button color="inherit">Blog</Button></Link>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar