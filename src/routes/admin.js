import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';

function AdminRoute(props) {
    const ValidateToken = () => {

        if (!props.user.isLogged)
            return false;
        const token = jwt(props.user.token);

        if (token.exp - Math.floor(Date.now() / 1000)  <= 0)
            return false;
        return true;
    }

    return (
        <>
            {
                ValidateToken() ?
                    <div>{props.children}</div>
                    : <Navigate to="/admin/login" />
            }
        </>
    );
};

const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps)(AdminRoute);