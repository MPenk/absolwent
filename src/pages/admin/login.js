import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LoginForm from '../../components/admin/LoginForm';
import { useNavigate } from 'react-router-dom';

export function Login(_props) {

    let navigate = useNavigate();
    const handeClickRemindPassword= () =>{
        navigate('/admin/password');
    }
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
                    <strong style={{fontSize:'3em'}}>Zaloguj się</strong>
                    <LoginForm/>
                    <Link style={{textDecoration: 'none'}} variant="body2" onClick={handeClickRemindPassword}>
                        Zapomniałeś hasła?
                    </Link>
                </Box>
            </Container>
        </>
    )
}