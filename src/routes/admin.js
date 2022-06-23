import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jwt-decode";

function AdminRoute(props) {
  const location = useLocation();

  const isPasswordPath = () => {
    return location.pathname.indexOf("/admin/password") == 0;
  };
  const ValidateToken = () => {
    if (!props.user.isLogged) return false;
    const token = jwt(props.user.token);
    if (token.exp - Math.floor(Date.now() / 1000) <= 0) return false;
    return true;
  };

  return (
    <>
      {ValidateToken() || isPasswordPath() ? (
        <div>{props.children}</div>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(AdminRoute);
