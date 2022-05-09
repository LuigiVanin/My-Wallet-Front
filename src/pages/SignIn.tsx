import {
    Title,
    Input,
    Form,
    Button,
    Spinner,
} from "../styles/components.style";
import { SignInContainer as Container } from "../styles/pages/signIn.style";
import { useState, useContext } from "react";
import { ISignIn } from "../helpers/interfaces";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { AxiosResponse } from "axios";

const SignIn: React.FC = () => {
    const [signInData, setSignUpData] = useState<ISignIn>({} as ISignIn);
    const [request, setRequest] = useState<boolean>(false);
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const changeSignIn = (event: any) => {
        const target = event.target;
        if (target.name === "email") {
            signInData.email = target.value;
        } else {
            signInData.password = target.value;
        }
        setSignUpData({ ...signInData });
    };

    const login = () => {
        const promise = api.post("sign-in", signInData);
        setRequest(true);
        promise.then((response: AxiosResponse) => {
            localStorage.setItem("token", response.data.token);
            context.setToken(response.data.token);
            context.setUser({
                name: response.data.name,
                email: response.data.email,
            });
            setRequest(false);
            navigate("/home");
        });
        promise.catch((err) => {
            alert("Algum erro ocorreu!");
            setRequest(false);
            console.log(err);
        });
    };

    const submitEvent: any = (event: Event) => {
        event.preventDefault();
        login();
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
                <Button>{!request ? "Entrar" : <Spinner />}</Button>
            </Form>

            <Link to="/signup">Primeira vez? Cadastre-se</Link>
        </Container>
    );
};

export default SignIn;
