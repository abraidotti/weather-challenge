import * as React from "react";
import "./index.css";

type LineChartProps = {
    data: {}[]
};

const minColor = "#128";
const maxColor = "#C42";
const avgColor = "#888";

const LineChart = (props: LineChartProps)  => 
    <>  
        <svg viewBox="0 0 500 100" className="chart">
            <polyline
                fill="none"
                stroke={maxColor}
                strokeWidth="2"
                points={props.data[0][0]}
                />

            <polyline
                fill="none"
                stroke={avgColor}
                strokeWidth="2"
                points={props.data[0][1]}
                />

            <polyline
                fill="none"
                stroke={minColor}
                strokeWidth="2"
                points={props.data[0][2]}
                />
        </svg>
    </>;

export { LineChart };
