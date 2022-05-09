import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import {
    HomeContainer as Container,
    TransferButton,
    ButtonBox,
} from "../styles/pages/home.style";
import IonIcon from "@reacticons/ionicons";
import api from "../services/api";
import { AxiosResponse } from "axios";
import TransfersPanel from "../components/TransfersPanel";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const { token } = useContext(AuthContext);
    const [transfers, setTransfers] = useState<any[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const config = {
                headers: {
                    Authentication: `Bearer ${token}`,
                },
            };
            const promise = api.get("/transfer", config);
            promise.then((response: AxiosResponse) => {
                // console.log(response);
                setTransfers(response.data as any[]);
            });
            promise.catch((err) => {
                console.log(err);
                alert("Não autorizado");
                navigate("/");
            });
        }
    }, [token]);

    return (
        <>
            <Header />
            <Container>
                <TransfersPanel transfers={transfers} />
                <ButtonBox>
                    <Link to="/entrada">
                        <TransferButton>
                            <IonIcon name="add-circle-outline" size="large" />
                            <h1>Nova entrada</h1>
                        </TransferButton>
                    </Link>
                    <Link to="/saida">
                        <TransferButton>
                            <IonIcon
                                name="remove-circle-outline"
                                size="large"
                            />
                            <h1>Nova saída</h1>
                        </TransferButton>
                    </Link>
                </ButtonBox>
            </Container>
        </>
    );
};

export default Home;
