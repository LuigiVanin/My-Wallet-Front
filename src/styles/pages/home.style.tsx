import styled from "styled-components";
import { Container } from "../components.style";

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
    /* background-color: blue; */
    /* background-color: white; */
    /* padding-inline: 15px; */

    svg {
        color: white;
    }

    nav {
        /* background: red; */
        height: 60px;
        width: 92%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        width: 70%;
        /* background-color: red; */
        color: white;
        font-size: 23px;
        font-weight: bold;
    }
`;

const HomeContainer = styled(Container)`
    gap: 15px;
    padding-top: 65px;
    width: 92%;
`;

const Panel = styled.div`
    width: 100%;
    height: calc(80vh - 65px);
    background: white;
    border-radius: 5px;
    padding: 10px;
    position: relative;

    .total {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 10px;
        font-weight: bold;
        font-size: 21px;

        .value {
            color: ${(props) => (!props ? "black" : props.color)};
        }
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5px;

    font-size: 18px;

    .left {
        max-width: 60%;
        word-break: break-all;
    }

    .right {
        max-width: 40%;
        word-break: break-all;
        color: ${(props) => (!props.color ? "black" : props.color)};
    }
`;

const TransferButton = styled.button`
    width: 100%;
    height: 95px;
    background: #a328d6;
    border-radius: 5px;
    border: none;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    h1 {
        font-weight: bold;
        text-align: left;
        font-size: 17px;
        width: 60%;
        line-height: 15px;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    height: 85px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    a {
        flex: 1;
        text-decoration: none;
    }
`;

export { Header, HomeContainer, Panel, TransferButton, ButtonBox, Item };
