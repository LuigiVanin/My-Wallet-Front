import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ISignUp } from "../helpers/interfaces";
import { Button, Form, Input, Title } from "../styles/components.style";
import { SignInContainer as Container } from "../styles/pages/signIn.style";

const SignUp: React.FC = () => {
    const [signUpData, setSignUpData] = useState<ISignUp>({} as ISignUp);
    return (
        <Container>
            <Title>My Wallet</Title>
            <Form>
                <Input placeholder="Nome..." />
                <Input placeholder="Email..." />
                <Input placeholder="Senha..." />
                <Input placeholder="Confirme a senha..." />
                <Button>Cadastrar</Button>
            </Form>

            <Link to="/">Já tem conta? Faça login</Link>
        </Container>
    );
};

export default SignUp;
