import * as React from 'react';
import Container from '@mui/material/Container';
import { SendPool } from '../../components/admin/SendPool';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
export function Dashboard(_props) {
  return (
    <>
      <Container maxWidth="sm">
        <SendPool />
        <Button>
        <NavLink to="graduate/register"> Rejestracja Absolwenta</NavLink>
                            </Button>
      </Container>
    </>
  )
}