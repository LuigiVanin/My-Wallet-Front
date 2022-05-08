import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import { Button, Form, Input } from "../styles/components.style";
import { TransferContainer } from "../styles/pages/transferPage.style";
import { ITransferPage, ITransfer } from "../helpers/interfaces";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const TransferPage: React.FC<ITransferPage> = ({ type }) => {
    const headerTitle = type === 1 ? "Adicionar Entrada" : "Adicionar Saída";
    const [transfer, setTransfer] = useState<ITransfer>({ type } as ITransfer);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const changeTransfer = (event: any) => {
        const target = event.target;
        if (target.name === "title") {
            transfer.title = target.value;
        } else {
            transfer.value = target.value;
        }
        setTransfer({ ...transfer });
    };

    const submitTransfer = (event: any) => {
        event.preventDefault();
        const config = {
            headers: {
                Authentication: `Bearer ${token}`,
            },
        };
        const promise = api.post("/transfer", { ...transfer }, config);
        promise.then((response) => {
            console.log(response);
            navigate("/home");
        });
        promise.catch((err) => {
            console.log(err);
            alert("alguma coisa errada com o formulário");
        });
    };

    return (
        <>
            <Header where={headerTitle} />
            <TransferContainer>
                <Form onSubmit={submitTransfer}>
                    <Input
                        placeholder="Titulo..."
                        type="text"
                        name="title"
                        onChange={changeTransfer}
                        required
                    />
                    <Input
                        placeholder="Valor..."
                        type="number"
                        name="value"
                        color={type === 1 ? "green" : "red"}
                        onChange={changeTransfer}
                        required
                    />
                    <Button>Adicionar</Button>
                </Form>
            </TransferContainer>
        </>
    );
};

export default TransferPage;
