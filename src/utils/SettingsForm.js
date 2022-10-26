import React, { useState, useRef } from 'react';
import { FormControlLabel } from '@mui/material';
import { TextField } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { ENV, API_URL, isProd } from './config';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';

function SettingsForm() {

    const [isOpen, setIsOpen] = useState(false);
    const inputApiUrl = useRef(null);
    const inputEnv = useRef(null);

    const handleSend = () => {
        inputApiUrl.current.value ? 
            localStorage.setItem('API_URL', inputApiUrl.current.value) :
            localStorage.removeItem('API_URL');

        inputEnv.current.value ?
            localStorage.setItem('ENV', inputEnv.current.value) : 
            localStorage.removeItem('ENV');

        setIsOpen(false);
        window.location.reload(false);
    }

    const handleCloseDialog = () => {
        setIsOpen(false);
    }
    const handleOpenDialog = () => {
        setIsOpen(true);
    }
    return (
        <>
            {!isProd() && (
                <>
                    <FormControlLabel sx={{ m: 2, position: "fixed", bottom: "30px", right: "30px" }} onClick={handleOpenDialog} control={
                        <>
                            <Avatar>
                                <SettingsIcon />
                            </Avatar>
                        </>
                    }
                    />

                    <Dialog onClose={handleCloseDialog} open={isOpen}>
                        <DialogTitle>Ustawienia deweloperskie</DialogTitle>
                        <Box sx={{ margin: 3, minWidth: "300px" }}>
                            <TextField
                                inputRef={inputApiUrl}
                                defaultValue={API_URL}
                                label={"Url api"}
                            />
                            <TextField
                                inputRef={inputEnv}
                                defaultValue={ENV}
                                label={"Środowisko"}
                            />
                        </Box>

                        <Box sx={{ margin: 3 }}>
                            <Container maxWidth="sm">
                                <Button
                                    sx={{ mx: 2 }}
                                    color="error"
                                    variant="contained"
                                    onClick={handleCloseDialog}
                                >
                                    Anuluj
                                </Button>
                                <Button sx={{ mx: 2 }} variant="contained" onClick={handleSend}>
                                    Zapisz
                                </Button>
                            </Container>
                        </Box>
                    </Dialog>
                </>
            )}
        </>
    )
}

export default SettingsForm;
