import { createTheme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

export const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body:  darkScrollbar(),
          },
        },
      },
      palette: {
        
        mode: 'dark',
      },
});