import React from 'react';
import { Button } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export function Header(_props) {
    return (
        <header className="App-header">
            <Button variant="outlined" href="/admin" startIcon={<AdminPanelSettingsIcon />}>
                Panel admina
            </Button>
        </header>
    )
}