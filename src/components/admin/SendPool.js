import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { execute } from '../../api/connection';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import { Backdrop } from '../Backdrop';
import store from '../../store';
import actions from '../../reducers/alerts/actions';

export function SendPool(props) {
    const [error, setErrorApi] = useState({ exist: false, message: "" });
    const [value, setValue] = useState(12);

    const handleSend = async () => {
        props.handleToggle();
        const result = await execute("/admin/pool", "POST", setErrorApi, value);
        if (result) {
            store.dispatch(actions.add({ title: "Sukces", message: "Wysłano ankiety", type: "success" }));
            navigate('/admin');
        }
        else {

        }
    };
    let navigate = useNavigate();
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlur = () => {
        if (value < 3) {
            setValue(3);
        } else if (value > 24) {
            setValue(24);
        }
    };
    return (
        <Dialog onClose={props.handleClose} open={props.open}>
            <DialogTitle>Ustaw częstotliwość</DialogTitle>
            <Box sx={{ margin: 3, minWidth: "300px" }}>
                <Typography id="input-slider" gutterBottom>
                    Miesiące
                </Typography>
                <Grid container spacing={2} alignItems="center">

                    <Grid item xs>
                        <Slider
                            margin="normal"
                            aria-label="Częstotliwość"
                            value={typeof value === 'number' ? value : 0}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={3}
                            max={24}
                            onChange={handleSliderChange}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 3,
                                max: 24,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ margin: 3 }}>
                <Container maxWidth="sm">
                    <Button variant="contained" onClick={handleSend} >
                        Wyślij ankiety
                    </Button>
                </Container>
            </Box>
        </Dialog>

    )

}
