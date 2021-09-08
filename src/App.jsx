import { makeStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import myTheme from './themeConfig'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Blog from './components/Blog'

const useStyle = makeStyles( (theme) => ({
  root: {
    minHeight: "100vh",
    background: "linear-gradient(to right bottom, #40B4F5, #4F11D2 100%)",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center"
  }
}))

function App() {
  const classes = useStyle()

  return (
    
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/projects' component={ Projects } />
            <Route exact path='/blog' component={ Blog } />
          </Switch>
        </Router>
      </div>
      <Contact />
    </ThemeProvider>
  );
}

export default App;
