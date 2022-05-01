import AdminRoute from "../../routes/admin"
import { Dashboard } from "./dashboard"
import Logout from "../../components/admin/Logout"

export function Admin(props) {

    return (
        <>
            <AdminRoute>
                <Logout/>
                <Dashboard />
            </AdminRoute>

        </>
    )
}