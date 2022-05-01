import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { SendPool } from '../../components/admin/SendPool';

import { Stack } from '@mui/material';


export function Dashboard(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  return (
    <>
      <Container maxWidth="sm">
        <Button variant="outlined" onClick={handleToggle}>
          Wyślij ankiety
        </Button>
        <SendPool handleClose={handleClose} open={open} handleToggle={handleToggle} />
      </Container>
    </>
      )
}