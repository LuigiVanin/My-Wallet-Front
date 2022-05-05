import {
    Container,
    Title,
    Input,
    Form,
    Button,
} from "../styles/components.style";
import { useState } from "react";
import { ISignIn } from "../helpers/interfaces";

export default function SignIn() {
    const [signUpData, setSignUpData] = useState<ISignIn>({} as ISignIn);

    const changeSignIn = (event: any) => {
        const target = event.target;
        if (target.name === "email") {
            signUpData.email = target.value;
        } else {
            signUpData.password = target.value;
        }
        setSignUpData({ ...signUpData });
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
                <Button>SignIn</Button>
            </Form>
        </Container>
    );
}
