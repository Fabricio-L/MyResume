import { createTheme } from '@material-ui/core/styles'

const myTheme = createTheme({
    palette: {
        background: {
            default: "#656565"
        },
        primary: {
            light: "#7986cb",
            main: "#fff",
            dark: "#dbff00",
            contrastText: "#fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }

    }
})

export default myTheme