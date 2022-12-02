import { AppBar, Box, Button } from '@mui/material';
import Icon from '../components/admin/Icon';
import Logo from '../assets/Logo.png'
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import DarkMode from '../utils/DarkMode'

export default function Header(_props) {

    let navigate = useNavigate();
    const pages = [
        {
            text: 'Strona główna',
            url: '/'
        }];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleRedirect = async (url) => {
        url && navigate(url);
    }
    return (
        <header className="App-header">
            <AppBar position="static">
                <Toolbar disableGutters>
                    <Box sx={{ ml:3 }}>

                        <Typography
                        style={{height:"100%"}}
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}
                        >
                            <img alt='Logo' style={{maxWidth:"4em", width:"100%", maxHeight:"2em"}} onClick={() => { handleRedirect('/') }} src={Logo} />
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" onClick={() => { handleRedirect(page.url) }} >{page.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img alt='Logo' style={{maxWidth:"4em", maxHeight:"4em"}} onClick={() => { handleRedirect('/') }} src={Logo} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => { handleCloseNavMenu(); handleRedirect(page.url); }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                    <Icon />
                    <DarkMode />
                </Toolbar>
            </AppBar>
        </header>
    )
}
