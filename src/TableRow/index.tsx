import * as React from "react";
import "./index.css";

type TableRowProps = {
    temps: {}
};



const TableRow = (props: TableRowProps) => 
    <>
    {console.log(props)}

    {<tr>{(Object.keys(props.temps).map((name, index) => <td key={index}>{props.temps[name][index]}</td>))}</tr>}
    {<tr>{(Object.keys(props.temps).map((name, index) => <td key={index}>{props.temps[name][index+1]}</td>))}</tr>}
    {<tr>{(Object.keys(props.temps).map((name, index) => <td key={index}>{props.temps[name][index+2]}</td>))}</tr>}

    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Berglunds snabbköp</td>
        <td>Christina Berglund</td>
        <td>Sweden</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
    <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
    </tr>
    <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
    </tr>
    <tr>
        <td>Königlich Essen</td>
        <td>Philip Cramer</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
    </tr>
    <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
    </tr>
    <tr>
        <td>North/South</td>
        <td>Simon Crowther</td>
        <td>UK</td>
    </tr>
    <tr>
        <td>Paris spécialités</td>
        <td>Marie Bertrand</td>
        <td>France</td>
    </tr>
    </>;

export { TableRow };
