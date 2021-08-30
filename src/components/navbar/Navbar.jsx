import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

const usesStyle = makeStyles(myTheme => ({
    offset: myTheme.mixins.toolbar,
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
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuRoundedIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Es mi primer navbar
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar