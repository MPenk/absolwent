import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import actions from '../../reducers/user/actions';
import {MenuItem} from '@mui/material';
function Logout(props) {


    let navigate = useNavigate();

    const handeLogout= () =>{
        props.clearUser();
            navigate('/');
    }
    return (
        <MenuItem  onClick={() => {props.handleCloseUserMenu(); handeLogout()}}>
            Wyloguj
        </MenuItem>

    )
}

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(actions.clear())
})
export default connect(null, mapDispatchToProps)(Logout);