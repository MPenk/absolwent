import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export function CustomTextField({label, value}) {

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
        <Grid item sm={2} minWidth="200px">
            <ValidationTextField
                margin="normal"
                fullWidth
                label={label}
                value={value}
                InputProps={{
                        readOnly: true,
                }}
            />
        </Grid>
    )
}