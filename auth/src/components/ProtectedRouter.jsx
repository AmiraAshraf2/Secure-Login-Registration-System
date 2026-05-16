import { Navigate } from "react-router-dom";
export default function ProtectedRouter({ children }) {
    const token = localStorage.getItem("username");

    return token
        ? children
        : <Navigate to="/login" />;
}
