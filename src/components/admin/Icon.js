import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import actions from "../../reducers/user/actions";
import { useNavigate } from "react-router-dom";
import { IconMenu } from "./IconMenu";

function Icon(props) {
  let navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <>
      {!props.user.isLogged ? (
        <>
          <Button
            color="inherit"
            onClick={handleAdmin}
          >
            zaloguj
          </Button>
        </>
      ) : (
        <IconMenu user={props.user} />
      )}
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  clearUser: () => dispatch(actions.clear()),
});
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Icon);
