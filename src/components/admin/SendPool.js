import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import { SendPoolConfirm } from "./SendPoolConfirm";

export function SendPool(_props) {
  const [value, setValue] = useState(12);
  const [openDialog, setOpenDialog] = useState(false);

  const handleToggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSliderChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 3) {
      setValue(3);
    } else if (value > 24) {
      setValue(24);
    }
  };
  return (
    <>
      <Box sx={{ margin: 3, minWidth: "300px" }}>
        <Typography id="input-slider" gutterBottom>
          Wybierz częstotliwość wysyłania ankiety
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              margin="normal"
              aria-label="Częstotliwość"
              value={typeof value === "number" ? value : 0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={3}
              max={24}
              onChange={handleSliderChange}
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 3,
                max: 24,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Button variant="outlined" onClick={handleToggleDialog}>
        Wyślij ankiety
      </Button>
      <SendPoolConfirm
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        frequency={value}
      />
    </>
  );
}
