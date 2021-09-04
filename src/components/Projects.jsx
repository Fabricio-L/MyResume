import { makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles( (theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}))

function Projects() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
        <Typography variant="h3" color="primary">Projects</Typography>
    </div>
  );
}

export default Projects;
