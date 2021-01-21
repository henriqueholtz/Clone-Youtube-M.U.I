import Home from './Home'
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";


function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
      inherit:{
        main: "#FFF"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
