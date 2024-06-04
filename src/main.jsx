import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProviderWrapper } from './Context/ThemeContext';
import App from './App';
// import './styles.css'; // Ensure you import your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
        <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
