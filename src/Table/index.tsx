import * as React from "react";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import "./index.css";

type TableProps = {
    data: {}
};

const Table = (props: TableProps) => 
    <>
        <h1>{Object.keys(props.data)}:</h1>
        <table id="temps">
            <tbody>
                <TableHeader names={props.data}/>
                <TableRow temps={props.data}/>
            </tbody>
    </table>
    </>;

export { Table };
