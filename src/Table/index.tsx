import * as React from "react";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import "./index.css";

type TableProps = {
    data: {}
};

const Table = (props: TableProps) => 
    <>  
        <h1>Table</h1>
        <table id="temps">
            <thead>
                <TableHeader names={props.data}/>
            </thead>
            <tbody>
                {
                (Object.keys(props.data['avg']).map((name, index) => 
                    <TableRow temps={props.data} key={index} keyIndex={index}/>))
                }
            </tbody>
        </table>
    </>;

export { Table };
