import { createTheme } from '@mui/material/styles';
const primaryColor = "#8EC0EA"
const shadow = "0px 10px 20px -10px rgba(66, 68, 90, 1)";
const radius = "15px";
const standardHeight = "4em";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  components: {
    MuiToolBar: {
      styleOverrides: {
        root: {
          '& .MuiToolbar-root': {
            minHeight: '3em'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: primaryColor,
              'border-radius': radius,
            },
          },
          'border-radius': radius,
          'box-shadow': shadow,
          "& .MuiInputLabel-root": {
            right: 0,
            textAlign: "center"
          },
          "& .MuiInputLabel-shrink": {
            textAlign: "left"
          },

        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: primaryColor,
              'border-radius': radius,
            },
          },
          'border-radius': radius,
          'box-shadow': shadow,
          "& .MuiInputLabel-root": {
            right: 0,
            textAlign: "center"
          },
          "& .MuiInputLabel-shrink": {
            textAlign: "left"
          },

        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root:{
          textTransform: "capitalize"
        },
        contained: {
          'border-radius': radius,
          'box-shadow': shadow,
          'min-height': standardHeight,
          'max-height': standardHeight,
          'font-weight': 'bold',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
          }
        }
      }
    }
  },
});