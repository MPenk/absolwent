import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export function CustomTextField({label, defaultValue, ...props}) {

    return(
    <Grid item xs={6} sm={3}>
        <TextField
            margin="normal"
            fullWidth
            id="rok_ukonczenia_studiow"
            label={label}
            defaultValue={defaultValue}
            InputProps={{
                    readOnly: true,
            }}
        />
    </Grid>
    )
}