import { Header as HeaderBar } from "../styles/pages/home.style";
import IonIcon from "@reacticons/ionicons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IHeader } from "../helpers/interfaces";

const Header: React.FC<IHeader> = ({ where }) => {
    const { user } = useContext(AuthContext);
    return (
        <HeaderBar>
            <nav>
                {!where ? (
                    <>
                        <h1>Olá, {user?.name}</h1>
                        <IonIcon name="log-out-outline" size="large" />
                    </>
                ) : (
                    <h1>{where}</h1>
                )}
            </nav>
        </HeaderBar>
    );
};

export default Header;
