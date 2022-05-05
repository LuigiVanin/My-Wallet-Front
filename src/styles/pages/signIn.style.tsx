import { Container } from "../components.style";
import styled from "styled-components";

const SignInContainer = styled(Container)`
    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        font-family: "Lexend Deca", sans-serif;
        margin-top: 45px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export { SignInContainer };
