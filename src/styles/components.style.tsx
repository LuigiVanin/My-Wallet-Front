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
    color: ${(props) => (!props.color ? "black" : props.color)};
    background-color: #ffffffb2;
    transition: all 0.3s ease-out;
    padding-inline: 25px;
    font-size: 21px;

    &:focus {
        background-color: #fffffff9;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 50%;
    color: white;
    font-weight: bold;
    height: 50px;
    border-radius: 7px;
    border: none;
    outline: none;
    font-size: 21px;
    cursor: pointer;
    background-color: #9b4abb;
    transition: all 0.2s ease-in-out;
    font-family: "Raleway", sans-serif;

    &:hover {
        transform: scale(1.01);
    }
`;

const Header = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    left: 0;
    right: 0px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: white;
    }

    nav {
        height: 60px;
        width: 92%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        width: 70%;
        color: white;
        font-size: 23px;
        font-weight: bold;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export { Container, Title, Input, Form, Button, Header };
