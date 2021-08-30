import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import myTheme from './themeConfig';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

const useStyle = makeStyles({
  myFirstClass : {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
})

function App() {
  const myClass = useStyle()

  return (
    <ThemeProvider theme={myTheme}>
      <Navbar />
      <div className="App">
        <Button className={myClass.myFirstClass}>Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <Menu />
    </ThemeProvider>
    
  );
}

export default App;
