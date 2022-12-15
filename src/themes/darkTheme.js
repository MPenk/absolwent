import { createTheme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

const shadow = "0px 10px 20px -10px rgba(66, 68, 90, 1)";
const radius = "15px";
const standardHeight = "4em";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },  
  
  components: {
        MuiCssBaseline: {
          styleOverrides: {
            body:  darkScrollbar(),
          },
        },
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
                  'border-radius': radius,
                  'box-shadow': shadow,
                },
              },
              'border-radius': radius,
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
        MuiFormControl:{
          styleOverrides:{
            root:{
              'max-width': 'none',
            }
          }
        },
        MuiTabs: {
          styleOverrides: {
            scroller: {
              'display': 'flex',
              'justify-content': 'center'
            }
          }
        },
        MuiSelect: {
          styleOverrides: {
            root: {
              '& fieldset': {
                'border-radius': radius,
              },
              'border-radius': radius,
              'box-shadow': shadow,
            },
          },
        },
        MuiFormControlLabel: {
          styleOverrides: {
            root: {
              'margin-right': '0px'
            }
          }
        },
        MuiCustomBox: {
          styleOverrides: {
            root: {
              textAlign: 'left'
            }
          }
        },
        MuiModal: {
          styleOverrides: {
            root: {
              '& .MuiPaper-root': {
                'border-radius': radius,
              }
            }
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
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