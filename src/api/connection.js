import { API_URL, ENV } from '../utils/config';
import store from '../store';
import actions from '../reducers/alerts/actions';
import { backdropActions as actionBackdrop } from '../reducers/backdrop';
import { t } from '../translations/t';

export const execute = async ({ path, requestMethod, setError, data, showBackdrop = true }) => {
    if (!!setError) setError({ exist: false, message: "" })
    if (showBackdrop) store.dispatch(actionBackdrop.turnOn());

    let apiUrl = API_URL;

    let resp = await fetch(apiUrl + path, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
        },
        method: requestMethod,
        body: JSON.stringify(data)
    }).then((response) => {
        if (showBackdrop) store.dispatch(actionBackdrop.turnOff());

        if (!response.ok)
            throw response;
        return response.json();
    }).catch(async err => {
        try {
            err.json().then(response => {
                store.dispatch(actions.add({ title: t("Error"), message: t(response.message), type: "error" }));
                if (!!setError) setError({ exist: true, message: response.message })
            });
            return false;
        } catch (error) {
            if (ENV != "Prod") {
            }
        }
    })
    return resp;
}
