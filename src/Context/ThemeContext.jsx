// src/Context/ThemeContext.jsx
import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import gifdark from '../assets/dark.gif';
// import giflight from '../assets/light.gif';

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
            width: '100%',
            backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          },
        },
      },
    },
  });

  theme.typography.h4["@media (max-width:600px)"] = {
    fontSize: '0.8rem', // Smaller font size for xs screens
    padding: '10px'
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
              backgroundImage: `url(${isDarkMode ? gifdark : "gray"})`,
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
