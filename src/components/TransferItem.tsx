import React from "react";
import { Item } from "../styles/pages/home.style";
import { convertToDecimal } from "../helpers/utils";
import dayjs from "dayjs";

const TransferItem: React.FC<{ transfer: any }> = ({ transfer }) => {
    const color = transfer.type === 1 ? "green" : "red";

    return (
        <Item color={color}>
            <div className="left">
                {" "}
                <span>{dayjs(transfer.time).format("DD/MM")}</span>{" "}
                {transfer.title}
            </div>
            <div className="right">
                {convertToDecimal(transfer.type * transfer.value)}
            </div>
        </Item>
    );
};

export default TransferItem;
