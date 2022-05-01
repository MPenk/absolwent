import Alert from './Alert';
import { connect } from 'react-redux';

 function Alerts(props) {
    return (
        <>
            {  props.alerts.map(alert => 
                <Alert key={alert.uuid} alert={alert}/>
            )}
        </>
    )
}

const mapStateToProps = state => ({
    alerts: state.alerts
})
export default connect(mapStateToProps)(Alerts);