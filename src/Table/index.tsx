import * as React from "react";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import "./index.css";

type TableProps = {};

const Table = ({  }: TableProps) => 
    <table id="temps">
        <tbody>
            <TableHeader />
            <TableRow />
        </tbody>
    </table>;

export { Table };
