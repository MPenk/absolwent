import Box from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export function CustomTextField({label, value, maxWidth}) {
    return(
        <Box sx={{ m: 1, width:"100%", maxWidth:{maxWidth}}} required>
            <TextField
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