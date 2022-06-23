import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { execute } from "../../api/connection";
import { useNavigate } from "react-router-dom";
import store from "../../store";
import actions from "../../reducers/alerts/actions";

export function SendPoolConfirmNow(props) {
  const [value] = useState(props.frequency);
  let navigate = useNavigate();
  useEffect(() => {
    props.setOpenDialog(props.openDialog);
  }, [props.openDialog]);
  const handleCloseDialog = () => {
    props.setOpenDialog(false);
  };
  const handleToggleDialog = () => {
    props.setOpenDialog(!props.openDialog);
  };

  const handleSend = async () => {
    handleToggleDialog();
    const result = await execute({
      path: "/admin/survey/send",
      requestMethod: "POST",
      data: { year: parseInt(value) },
    });

    if (result) {
      store.dispatch(
        actions.add({
          title: "Sukces",
          message: "Wysyłanie ankiet",
          type: "success",
        })
      );
      navigate("/admin");
    }
  };

  return (
    <>
      <Dialog onClose={handleCloseDialog} open={props.openDialog}>
        <Box sx={{ margin: 3, minWidth: "300px" }}>
          <Typography id="input-slider" gutterBottom>
            Czy na pewno chcesz wysłać ankiety do roku {value}?
          </Typography>
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
              Wyślij ankiety
            </Button>
          </Container>
        </Box>
      </Dialog>
    </>
  );
}
