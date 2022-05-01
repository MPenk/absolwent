import React, { useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';
import { connect } from 'react-redux';
import actions from '../reducers/darkMode/actions';

function DarkMode(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode.isDark);

    const handleChangeDarkMode = () => {
        props.toogleMode();
        setDarkMode(!darkMode);
    }

    return (
        <div style={{ justifyContent: "right", textAlign: "right" }}>
            <FormControlLabel control={
                <Switch
                    checked={darkMode}
                    onChange={handleChangeDarkMode} />}
                label="Dark Mode" />
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
