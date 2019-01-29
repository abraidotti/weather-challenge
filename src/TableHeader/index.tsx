import * as React from "react";
import "./index.css";

type TableHeaderProps = {
    names: {}
};

const TableHeader = (props: TableHeaderProps) => 
    <>
        <tr>
            {(Object.keys(props.names).map((name, index) => <th key={index}>{name}</th>))}
        </tr>
    </>;

export { TableHeader };
