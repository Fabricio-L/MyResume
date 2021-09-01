import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'

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
    }
}))

const Navbar = () => {
    const classes = usesStyle()

    return (
        <div>
            <AppBar position="fixed" className={classes.navColor}>
                <Toolbar>
                    
                    {/* <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuRoundedIcon />
                    </IconButton> */}
                    
                    <Typography variant="h6" className={classes.title}>
                        Fabricio
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Blog</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar