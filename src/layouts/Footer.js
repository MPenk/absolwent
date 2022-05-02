import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export function Footer(_props) {

    return (
        <footer className="App-footer">
            <Box
                px={{ xs: 1, sm: 3 }}
                py={{ xs: 2, sm: 4 }}
                bgcolor="text.secondary"
                color="backgraund.secondary"
            >
                <Container maxWidth="lg">
                    {/*
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    */}
                    <Box textAlign="center" pt={{ xs: 2, sm: 3 }} pb={{ xs: 0, sm: 0 }}>
                        <Link href="https://iconscout.com/icons/graduation" color="inherit" target="_blank" rel="noreferrer">
                            Graduation Icon
                        </Link>
                        <span> by </span>
                        <Link href="https://iconscout.com/contributors/amit-jakhu" color="inherit" target="_blank" rel="noreferrer">
                            Amit Jakhu
                        </Link>
                        <span> on </span>
                        <Link href="https://iconscout.com" color="inherit" target="_blank" rel="noreferrer">
                            IconScout
                        </Link>
                    </Box>
                    <Box textAlign="center" pt={{ xs: 2, sm: 2 }} pb={{ xs: 2, sm: 2 }}>
                        <Link href="https://absolwent.best/" color="inherit" target="_blank" rel="noreferrer">
                            ABSOLWENT
                        </Link>
                        <span> by </span>
                        <Link href="https://github.com/kowalkos" color="inherit" target="_blank" rel="noreferrer">
                            Kowalke
                        </Link>
                        <span>, </span>
                        <Link href="https://github.com/MPenk" color="inherit" target="_blank" rel="noreferrer">
                            Penk
                        </Link>
                        <span>, </span>
                        <Link href="https://github.com/eziaw" color="inherit" target="_blank" rel="noreferrer">
                            Sewastianow
                        </Link>
                        <span> 2022</span>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}