import React, {useState} from 'react'
import Home from './Home'
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3ea6ff",
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
