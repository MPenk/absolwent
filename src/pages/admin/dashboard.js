import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Dashboard(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSend = () => {
    console.log("Wysyłanie...");
    handleToggle();
  };
  return (
    <>
      <Container maxWidth="sm">
        <Button variant="outlined" onClick={handleToggle}>
          Wyślij ankiety
        </Button>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Ustaw częstotliwość</DialogTitle>
          <Box sx={{ margin: 3 }}>
            <Typography id="input-slider" gutterBottom>
              Miesiące
            </Typography>
            <Slider
              margin="normal"
              aria-label="Częstotliwość"
              defaultValue={6}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={3}
              max={24}
            />
          </Box>
          <Box sx={{ margin: 3 }}>
            <Container maxWidth="sm">
              <Button variant="contained" onClick={handleSend}>
                Wyślij ankiety
              </Button>
            </Container>
          </Box>
        </Dialog>
      </Container>
    </>
  )
}