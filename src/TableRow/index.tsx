import * as React from "react";
import "./index.css";

type TableRowProps = {
    temps: {},
    keyIndex: number
};

const TableRow = (props: TableRowProps) => 
    <>
        <tr>
            {
                (Object.keys(props.temps).map((name, index) => 
                    <td key={index}>{props.temps[name][props.keyIndex]}</td>))
            }
        </tr>
    </>;

export { TableRow };
