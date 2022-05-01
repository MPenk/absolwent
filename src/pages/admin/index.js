import { AdminRoute } from "../../routes/admin"
import { Dashboard } from "./dashboard"

export function Admin(props) {

    return (
        <>
            W budowie
            <AdminRoute>
                <Dashboard />
            </AdminRoute>

        </>
    )
}