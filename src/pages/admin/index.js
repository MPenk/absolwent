import AdminRoute from "../../routes/admin"
import { Dashboard } from "./dashboard"
import Logout from "../../components/admin/Logout"
import { Helmet } from 'react-helmet';

export function Admin(props) {

    return (
        <>

            <AdminRoute>
                <Helmet>
                    <title>Absolwent | Admin</title>
                </Helmet>
                <Logout />
                <Dashboard />
            </AdminRoute>

        </>
    )
}