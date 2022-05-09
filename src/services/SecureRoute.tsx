import { Navigate } from "react-router-dom";
import { Props } from "../helpers/interfaces";

const SecureRoute = ({ children }: Props) => {
    const currentUser = localStorage.getItem("token");
    if (!currentUser) {
        console.log("Não autorizado");
        return <Navigate to="/" replace />;
    }

    return children;
};

export default SecureRoute;
