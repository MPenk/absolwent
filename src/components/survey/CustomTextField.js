import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export function CustomTextField({label, value, ...props}) {

    return(
    <Grid item xs={6} sm={3}>
        <TextField
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