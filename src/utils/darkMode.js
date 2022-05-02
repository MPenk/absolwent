import React, { useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';
import { connect } from 'react-redux';
import actions from '../reducers/darkMode/actions';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function DarkMode(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode.isDark);

    const handleChangeDarkMode = () => {
        props.toogleMode();
        setDarkMode(!darkMode);
    }
    const DarkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: grey[200],
            '&:hover': {
                backgroundColor: alpha(grey[700], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: grey[500],
        },
    }));
    return (
        <div style={{ justifyContent: "right", textAlign: "right" }}>
            <FormControlLabel sx={{m:2}} onClick={handleChangeDarkMode} control={
                <>
 
                    {darkMode?<LightModeIcon/>:<DarkModeIcon />}
                </>
            }
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toogleMode: () => dispatch(actions.toogle())
})

const mapStateToProps = state => ({
    darkMode: state.darkMode
})
export default connect(mapStateToProps, mapDispatchToProps)(DarkMode);
