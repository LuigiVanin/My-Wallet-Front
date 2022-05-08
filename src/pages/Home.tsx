import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
// import { ButtonBox } from "../styles/components.style";
import {
    HomeContainer as Container,
    TransferButton,
    ButtonBox,
} from "../styles/pages/home.style";
import IonIcon from "@reacticons/ionicons";
import api from "../services/api";
import { AxiosResponse } from "axios";
import TransfersPanel from "../components/TransfersPanel";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const { user, token } = useContext(AuthContext);
    const [transfers, setTransfers] = useState<any[] | null>(null);

    useEffect(() => {
        if (token) {
            const config = {
                headers: {
                    Authentication: `Bearer ${token}`,
                },
            };
            const promise = api.get("/transfer", config);
            promise.then((response: AxiosResponse) => {
                console.log(response);
                setTransfers(response.data as any[]);
            });
            promise.catch((err) => {
                console.log(err);
            });
        } else {
            console.log("NO TOKEN YET");
        }
    }, [token]);

    console.log(user);
    return (
        <>
            <Header />
            <Container>
                <TransfersPanel />
                <ButtonBox>
                    <Link to="/entrada">
                        <TransferButton>
                            <IonIcon
                                name="remove-circle-outline"
                                size="large"
                            />
                            <h1>Nova entrada</h1>
                        </TransferButton>
                    </Link>
                    <Link to="/entrada">
                        <TransferButton>
                            <IonIcon name="add-circle-outline" size="large" />
                            <h1>Nova saída</h1>
                        </TransferButton>
                    </Link>
                </ButtonBox>
            </Container>
        </>
    );
};

export default Home;
