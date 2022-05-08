import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Props } from "../helpers/interfaces";

const SecureRoute = ({ children }: Props) => {
    const auth = useContext(AuthContext);
    const currentUser = auth?.user;
    if (!currentUser) {
        console.log("Não autorizado");
        return <Navigate to="/" replace />;
    }

    return children;
};

export default SecureRoute;
