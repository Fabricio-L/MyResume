import { makeStyles, Typography, Box, Grow } from '@material-ui/core'

const useStyle = makeStyles( (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  gridContainer: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(1, 1.3fr 1fr)',
    gridTemplateRows: 'repeat(3, 200px)',
    gap: 25
  },
  text: {
    marginBottom: '20px'
  },
  gridItem: {
    background: '#ffffff',
    borderRadius: '40px'
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
  }
}))

function Projects() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
        <Typography className={classes.text} variant="h4" color="primary">Projects</Typography>

        <div style={{ width: '60%' }}>
          <Box className={classes.gridContainer}>
            <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition1}></div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 2000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition2}></div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 3000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition3}></div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 4000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition4}></div>
            </Grow>
            <Grow in={true} {...(true ? { timeout: 5000 } : {})}>
              <div className={classes.gridItem+' '+classes.gridItemPosition5}></div>
            </Grow>
          </Box>
        </div>
    </div>
  );
}

export default Projects;
