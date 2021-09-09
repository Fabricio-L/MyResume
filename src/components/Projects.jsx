import { makeStyles, Typography, Box, Grow, IconButton } from '@material-ui/core'
import CallMadeIcon from '@material-ui/icons/CallMade'

const useStyle = makeStyles( (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "150vh"
  },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      width: "330px"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "700px"
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "1000px"
    },
    [theme.breakpoints.up('lg')]: {
      width: "1200px"
    }
  },
  gridContainer: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(1, 1.2fr 1fr)',
    gridTemplateRows: 'repeat(3, 40vh)',
    gap: 35,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      gridAutoFlow: 'unset',
      gap: 0
    },
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      flexDirection: 'column',
      gridAutoFlow: 'unset',
      gap: 0
    }
  },
  text: {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: "4rem"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: "4rem"
    }
  },
  gridItem: {
    background: '#ffffff',
    borderRadius: '40px',
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down('sm')]: {
      height: "330px",
      marginBottom: "2rem"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: "330px",
      marginBottom: "2rem"
    }
  },
  gridItemPosition1: {
    gridColumn: '1',
    gridRow: '1',
    backgroundImage: 'url("project-1.jpg")',
    backgroundSize: 'cover'
  },
  gridItemPosition2: {
    gridColumn: '2',
    gridRow: '1',
    backgroundImage: 'url("project-3.jpg")',
    backgroundSize: 'cover'
  },
  gridItemPosition3: {
    gridColumn: '1',
    gridRow: '2',
    backgroundImage: 'url("project-2.jpg")',
    backgroundSize: 'cover'
  },
  gridItemPosition4: {
    gridColumn: '1',
    gridRow: '3',
    backgroundImage: 'url("project-5.jpg")',
    backgroundSize: 'cover'
  },
  gridItemPosition5: {
    gridColumn: '2',
    gridRow: '2 / 4',
    backgroundImage: 'url("project-4.jpg")',
    backgroundSize: 'cover'
  },
  iconRow: {
    marginLeft: "2px",
    transform: "rotate(0deg)",
    transition: "transform 0.3s",
    '&:hover': {
      transform: "rotate(45deg)"
    }
  },
  buttonAnimation: {
    marginLeft: "1rem",
    marginBottom: "1rem",
    borderRadius: "30px !important",
    backgroundColor: "#4e1cd499",
    color: "#ffffff",
    fontSize: "0px",
    transition: "font-size 0.3s",
    '&:hover': {
      backgroundColor: "#4e1cd499",
      fontSize: "18px"
    }
  }
}))

function Projects() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
        <Typography className={classes.text} variant="h4" color="primary">Projects</Typography>

        <div className={classes.mainContainer}>
          <Box className={classes.gridContainer}>
            <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition1}>
                <IconButton href="https://www.perryellis.pe" target="_blank" className={classes.buttonAnimation} aria-label="add an alarm">
                  <span>Ecommerce - Perry Ellis Perú</span>
                  <CallMadeIcon className={classes.iconRow} />
                </IconButton>
              </div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 2000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition2}>
                <IconButton className={classes.buttonAnimation} aria-label="add an alarm">
                  <span>Blog - The Glory TV</span>
                  <CallMadeIcon className={classes.iconRow} />
                </IconButton>
              </div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 3000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition3}>
                <IconButton href="https://www.farmalife.com.ar" target="_blank" className={classes.buttonAnimation} aria-label="add an alarm">
                  <span>Ecommerce - Farmalife</span>
                  <CallMadeIcon className={classes.iconRow} />
                </IconButton>
              </div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 4000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition4}>
                <IconButton className={classes.buttonAnimation} aria-label="add an alarm">
                  <span>Contact Form on Firebase</span>
                  <CallMadeIcon className={classes.iconRow} />
                </IconButton>
              </div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 5000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition5}>
                <IconButton href="https://www.personal.com.py" target="_blank" className={classes.buttonAnimation} aria-label="add an alarm">
                  <span>Ecommerce - Personal Paraguay</span>
                  <CallMadeIcon className={classes.iconRow} />
                </IconButton>
              </div>
            </Grow>
          </Box>
        </div>
    </div>
  );
}

export default Projects;
