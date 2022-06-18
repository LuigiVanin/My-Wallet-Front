import React from "react";
import { Panel } from "../styles/pages/home.style";
import { TransferProps } from "../helpers/interfaces";
import TransferItem from "./TransferItem";
import { convertToDecimal } from "../helpers/utils";

const TransfersPanel: React.FC<TransferProps> = ({ transfers }) => {
    const calcTotal = () => {
        let sum = 0;
        transfers?.forEach((item) => {
            sum += Number(item.value * item.type);
        });
        return sum;
    };

    const color = calcTotal() > 0 ? "green" : "red";

    return (
        <Panel color={color}>
            {!transfers?.length ? (
                <p className="error">Nenhuma transferência aqui!</p>
            ) : (
                transfers?.map((item) => {
                    return <TransferItem transfer={item} key={item._id} />;
                })
            )}

            <div className="total">
                <h1>TOTAL:</h1>
                <h1 className="value">{convertToDecimal(calcTotal())}</h1>
            </div>
        </Panel>
    );
};

export default TransfersPanel;
