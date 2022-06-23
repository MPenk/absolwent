import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

export function IconMenu(props) {
  let navigate = useNavigate();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleAdmin = () => {
    navigate("/admin");
  };
  const handleSurvey = () => {
    navigate("/survey");
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {props.user.isLogged && (
              <Avatar sx={{ bgcolor: stringToColor(props.user.login) }}>
                {props.user.login.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              handleAdmin();
            }}
          >
            Panel
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              handleSurvey();
            }}
          >
            Ankieta
          </MenuItem>
          <Logout handleCloseUserMenu={handleCloseUserMenu} />
        </Menu>
      </Box>
    </>
  );
}
