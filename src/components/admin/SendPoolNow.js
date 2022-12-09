import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { SendPoolConfirmNow } from "./SendPoolConfirmNow";

export function SendPoolNow(_props) {
  const [value, setValue] = useState(2022);
  const [openDialog, setOpenDialog] = useState(false);

  const handleToggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSliderChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ margin: 3, minWidth: "300px" }}>
        <Typography id="input-slider" gutterBottom>
          Wybierz rok dla którego wysłać ankiety
        </Typography>
        <TextField
          margin="normal"
          label="Rok"
          inputProps={{ min: "1990", max: "2022", step: "1" }}
          onChange={handleSliderChange}
          type="number"
          sx={{ margin: 3, minWidth: "15em" }}
        />
      </Box>
      <Button variant="outlined" onClick={handleToggleDialog}>
        Wyślij ankiety
      </Button>
      <SendPoolConfirmNow
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        frequency={value}
      />
    </>
  );
}
