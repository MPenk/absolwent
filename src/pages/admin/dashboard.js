import * as React from 'react';
import Container from '@mui/material/Container';
import { SendPool } from '../../components/admin/SendPool';

export function Dashboard(_props) {
  return (
    <>
      <Container maxWidth="sm">
        <SendPool />
      </Container>
    </>
  )
}