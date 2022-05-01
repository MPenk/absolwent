import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import actions from '../../reducers/user/actions';

function Logout(props) {


    let navigate = useNavigate();

    const handeLogout= () =>{
        props.clearUser();
            navigate('/');
        return;
    }
    return (
        <Button color="secondary" onClick={handeLogout} >Wyloguj</Button>
    )
}

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(actions.clear())
})
export default connect(null, mapDispatchToProps)(Logout);