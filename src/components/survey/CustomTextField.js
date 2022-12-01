import Box from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export function CustomTextField({label, value, maxWidth}) {

    const ValidationTextField = styled(TextField)({
        '& input:read-only:hover + fieldset': {
            borderColor: 'gray',
        },
        '& input:read-only + fieldset': {
            borderColor: 'gray',
        },
        '& input:read-only:focus + fieldset': {
            borderColor: 'gray',
            borderWidth: 1,
        },
        '& label.Mui-focused': {
            color: 'gray',
        },
    });

    return(
        <Box sx={{ m: 1, width:"100%", maxWidth:{maxWidth}}} required>
            <ValidationTextField
                margin="normal"
                label={label}
                value={value}
                InputProps={{
                        readOnly: true,
                }}
            />
        </Box>
    )
}