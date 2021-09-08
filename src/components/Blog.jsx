import { makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles( (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    marginBottom: '20px'
  }
}))

function Projects() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
        <Typography className={classes.text} variant="h4" color="primary">Coming soon...</Typography>
    </div>
  );
}

export default Projects;
