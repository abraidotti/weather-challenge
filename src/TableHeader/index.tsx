import * as React from "react";
import "./index.css";

type TableHeaderProps = {};

const TableHeader = ({  }: TableHeaderProps) => 
    <tr>
        <th>min temps</th>
        <th>avg temps</th>
        <th>max temps</th>
    </tr>;

export { TableHeader };
