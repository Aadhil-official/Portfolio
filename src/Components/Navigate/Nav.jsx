// import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Container from '@mui/material/Container';

// const Nav = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//     components: {
//       // MuiAppBar: {
//       //   styleOverrides: {
//       //     root: {
//       //       backgroundColor: 'transparent',
//       //       boxShadow: 'none',
//       //     },
//       //   },
//       // },
//     },
//   });

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Transparent Toolbar
//           </Typography>
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="mode"
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Content goes here.
//         </Typography>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Nav;
