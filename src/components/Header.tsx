import { Header as HeaderBar } from "../styles/components.style";
import { useNavigate } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IHeader } from "../helpers/interfaces";
import { IUser } from "../helpers/interfaces";

const Header: React.FC<IHeader> = ({ where }) => {
    const { user, setUser, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser({} as IUser);
        navigate("/");
    };
    return (
        <HeaderBar>
            <nav>
                {!where ? (
                    <>
                        <h1>Olá, {user?.name}</h1>
                        <IonIcon
                            name="log-out-outline"
                            size="large"
                            onClick={logOut}
                        />
                    </>
                ) : (
                    <>
                        <h1>{where}</h1>
                        <IonIcon
                            name="close"
                            size="large"
                            onClick={() => {
                                navigate(-1);
                            }}
                        />
                    </>
                )}
            </nav>
        </HeaderBar>
    );
};

export default Header;
