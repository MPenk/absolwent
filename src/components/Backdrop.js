import {Backdrop as BackdropMui}  from '@mui/material' ;
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { connect } from 'react-redux';

function Backdrop(props) {

    return (
        <BackdropMui
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
            open={props.backdrop.open}
        >
            <CircularProgress color="inherit" />
        </BackdropMui>
    )
}

const mapStateToProps = state => ({
    backdrop: state.backdrop
})
export default  connect(mapStateToProps)(Backdrop);