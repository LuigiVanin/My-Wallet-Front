import { Title, Input, Form, Button } from "../styles/components.style";
import { SignInContainer as Container } from "../styles/pages/signIn.style";
import { useState } from "react";
import { ISignIn } from "../helpers/interfaces";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
    const [signInData, setSignUpData] = useState<ISignIn>({} as ISignIn);

    const changeSignIn = (event: any) => {
        const target = event.target;
        if (target.name === "email") {
            signInData.email = target.value;
        } else {
            signInData.password = target.value;
        }
        setSignUpData({ ...signInData });
    };

    const submitEvent: any = (event: Event) => {
        event.preventDefault();
        alert("Próxima página!");
    };

    return (
        <Container>
            <Title>My Wallet</Title>
            <Form onSubmit={submitEvent}>
                <Input
                    placeholder="Email..."
                    name="email"
                    type="email"
                    onChange={changeSignIn}
                    required
                />
                <Input
                    placeholder="Senha..."
                    name="password"
                    type="password"
                    onChange={changeSignIn}
                    required
                />
                <Button>Sign In</Button>
            </Form>

            <Link to="/signup">Primeira vez? Cadastre-se</Link>
        </Container>
    );
};

export default SignIn;
