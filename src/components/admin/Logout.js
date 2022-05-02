import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import actions from '../../reducers/user/actions';
function Logout(props) {


    let navigate = useNavigate();

    const handeLogout= () =>{
        props.clearUser();
            navigate('/');
    }
    return (
        <Typography textAlign="center" onClick={handeLogout} >Wyloguj</Typography>
    )
}

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(actions.clear())
})
export default connect(null, mapDispatchToProps)(Logout);