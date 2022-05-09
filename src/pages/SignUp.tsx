import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ISignUp } from "../helpers/interfaces";
import api from "../services/api";
import { Button, Form, Input, Title } from "../styles/components.style";
import { SignInContainer as Container } from "../styles/pages/signIn.style";

type SignUpTypes = "name" | "email" | "password" | "password2";

const SignUp: React.FC = () => {
    const [signUpData, setSignUpData] = useState<ISignUp>({} as ISignUp);
    const navigate = useNavigate();

    const changeSignUp = (event: any) => {
        const target = event.target;
        signUpData[target.name as SignUpTypes] = target.value;
        setSignUpData({ ...signUpData });
    };

    const signUp = () => {
        const promise = api.post("/sign-up", signUpData);
        promise.then((response: AxiosResponse) => {
            return navigate("/");
        });
        promise.catch((err) => {
            alert("Algo de errado no sue formulário");
            console.log(err);
        });
    };

    const submitSignUp = (event: any) => {
        event.preventDefault();
        signUp();
    };

    return (
        <Container>
            <Title>My Wallet</Title>
            <Form onSubmit={submitSignUp}>
                <Input
                    placeholder="Nome..."
                    name="name"
                    onChange={changeSignUp}
                    required
                />
                <Input
                    placeholder="Email..."
                    name="email"
                    onChange={changeSignUp}
                    required
                />
                <Input
                    placeholder="Senha..."
                    name="password"
                    onChange={changeSignUp}
                    required
                />
                <Input
                    placeholder="Confirme a senha..."
                    name="password2"
                    onChange={changeSignUp}
                    required
                />
                <Button>Cadastrar</Button>
            </Form>

            <Link to="/">Já tem conta? Faça login</Link>
        </Container>
    );
};

export default SignUp;
