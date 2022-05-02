import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LoginForm from '../../components/admin/LoginForm';

export function Login(_props) {
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    Logowanie
                    <LoginForm/>
                    <Link href="#" variant="body2">
                        Zapomniałeś hasła?
                    </Link>
                </Box>
            </Container>
        </>
    )
}