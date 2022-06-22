import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
export function WaitingForEmail(_props) {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Reset hasła</Typography>
          <Typography>
            Link do zmiany hasła został wysłany na wskazaną skrzynkę mailową.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
