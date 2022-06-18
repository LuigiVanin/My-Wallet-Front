import styled from "styled-components";
import { Container } from "../components.style";

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
    padding-inline: 20px;
    position: relative;
    padding-top: 25px;
    position: relative;

    .error {
        top: 50%;
        left: 0;
        width: 100%;
        position: absolute;
        text-align: center;
        font-weight: bold;
        color: #707070;
    }

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
        font-family: Raleway, sans-serif;

        .value {
            color: ${(props) => (!props ? "black" : props.color)};
            font-family: Raleway, sans-serif;
        }
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 15px;

    font-size: 16px;

    .left {
        max-width: 70%;
        word-break: break-all;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: Raleway, sans-serif;

        span {
            color: #c6c6c6;
            margin-right: 10px;
        }
    }

    .right {
        max-width: 30%;
        word-break: break-all;
        color: ${(props) => (!props.color ? "black" : props.color)};
        font-family: Raleway, sans-serif;
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
    cursor: pointer;

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

export { HomeContainer, Panel, TransferButton, ButtonBox, Item };
