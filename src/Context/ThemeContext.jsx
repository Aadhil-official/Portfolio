// src/Context/ThemeContext.jsx
import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import hello from '../assets/Hello.gif';
// import gifdark from '../assets/dark.gif';
// import giflight from '../assets/light.gif';

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // const stylebackdrop = {
  //   backdropFilter: blur('20px'),
  //   WebkitBackdropFilter: blur('20px'),
  //   backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
  // }

  let theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      h4: {
        fontSize: '2rem', // Default font size for h4
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            // width: '99.5%',
            // padding:0,
            // margin:0,
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  });

  theme.typography.h4["@media (max-width:600px)"] = {
    fontSize: '0.8rem', // Smaller font size for xs screens
    padding: '8.5px'
  };

  theme = responsiveFontSizes(theme);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ width: '100%', position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // backgroundImage: `url(${isDarkMode ? gifdark : hello})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              opacity: 0.1, // Adjust the opacity as needed
              zIndex: -1,
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </div>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderWrapper, ThemeContext };
