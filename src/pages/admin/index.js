import AdminRoute from "../../routes/admin";
import { Dashboard } from "./dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import { RequestResetPasswordForm } from "../../components/admin/resetPassword/RequestResetPasswordForm";
import { WaitingForEmail } from "../../components/admin/resetPassword/WaitingForEmail";
import { ResetPassword } from "../../components/admin/resetPassword/ResetPassword";

export function Admin(_props) {
  const location = useLocation();
  const getDashboardPanel = () => {
    if (location.pathname.indexOf("/admin/graduate/list") == 0) return 2;
    if (location.pathname.indexOf("/admin/suvery/send") == 0) return 1;
    else return 0;
  };
  return (
    <>
      <AdminRoute>
        <Routes>
          <Route path="password" element={<RequestResetPasswordForm />} />
          <Route path="password/email" element={<WaitingForEmail />} />
          <Route path="password/reset" element={<ResetPassword />} />
          <Route path="*" element={<Dashboard value={getDashboardPanel} />} />
        </Routes>
      </AdminRoute>
    </>
  );
}
