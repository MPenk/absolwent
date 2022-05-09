import AdminRoute from "../../routes/admin"
import { Dashboard } from "./dashboard"
import Logout from "../../components/admin/Logout"
import { Helmet } from 'react-helmet';
import { Routes, Route  } from "react-router-dom";
import { RegisterGraduate } from "../../components/admin/RegisterGraduate";
export function Admin(_props) {
    return (
        <>
            <AdminRoute>
                <Routes >
                    <Route path='graduate/register' element={<RegisterGraduate />}  />
                    <Route path='' element={<Dashboard />} />

                    
                </Routes>
            </AdminRoute>
        </>
    )
}