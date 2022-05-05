import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    margin-inline: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: white; */
`;

const Title = styled.h1`
    margin-bottom: 40px;
    font-size: 43px;
    color: white;
    font-family: "Saira Stencil One", cursive;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 7px;
    border: none;
    outline: none;
    color: black;
    background-color: #ffffffb2;
    transition: all 0.3s ease-out;
    padding-inline: 25px;
    font-size: 21px;

    &:focus {
        background-color: #fffffff4;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 50%;
    color: white;
    height: 60px;
    border-radius: 7px;
    border: none;
    outline: none;
    font-size: 21px;
    cursor: pointer;
    background-color: #9b4abb;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }
`;

export { Container, Title, Input, Form, Button };
