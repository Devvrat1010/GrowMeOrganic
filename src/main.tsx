import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./App.css"
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type {} from '@mui/x-data-grid/themeAugmentation';
const theme = createTheme({
    components: {
        // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
        MuiDataGrid: {
          styleOverrides: {
            root: {
              backgroundColor: 'red',
            },
          },
        },
      },
    typography: {
        fontFamily: [
            'Bebas Neue',
            'Poppins',
            'sans-serif',
        ].join(',')},
    });

ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
//   </React.StrictMode>,
)
