import React, { useState } from 'react';
import { Alert as AlertMui, Stack, Collapse } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import actions from '../reducers/alerts/actions';
import CircularProgress from '@mui/material/CircularProgress';
function Alert({ alert, ...props }) {
    const [open, setOpen] = useState(true);
    const [progress, setProgress] = React.useState(1);
    setTimeout(() => { removeAlert(); }, 10000);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 0.5));
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);


    const removeAlert = () => {
        setOpen(false);
        setTimeout(() => { props.removeAlert(alert); }, 500);
    }

    return (
        <Collapse in={open}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <AlertMui action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={removeAlert}>
                        <CircularProgress variant="determinate" value={progress} color="inherit" sx={{ mr: 3 }} />
                        <CloseIcon fontSize="inherit" />
                    </IconButton>} sx={{ mb: 2 }} severity={alert.type} >
                    {alert.title && <AlertTitle sx={{ display: 'flex' }}>{alert.title}</AlertTitle>}
                    {alert.message ? alert.message : "Nieznany błąd"}
                </AlertMui>

            </Stack>
        </Collapse>
    )
}

const mapDispatchToProps = dispatch => ({
    removeAlert: (alert) => dispatch(actions.remove(alert))
})
export default connect(null, mapDispatchToProps)(Alert);
