import * as React from "react";
import "./index.css";

// type LineChartProps = {
//     data: string
// };



const minColor = "#128";
const maxColor = "#C42";
const avgColor = "#888";

const LineChart = () => 
        
    <> 
        <h1>line chart:</h1>
        <svg viewBox="0 0 500 100" className="chart">
        
        <polyline
        fill="none"
        stroke={minColor}
        strokeWidth="2"
        points="
            00,120
            20,60
            40,80
            60,20
            80,80
            100,80
            120,60
            140,100
            160,90
            180,80
            200, 110
            220, 10
            240, 70
            260, 100
            280, 100
            300, 40
            320, 0
            340, 100
            360, 100
            380, 120
            400, 60
            420, 70
            440, 80
        "
        />

    <polyline
        fill="none"
        stroke={maxColor}
        strokeWidth="2"
        points="
            00,100
            20,60
            40,80
            60,20
            80,80
            100,80
            120,60
            140,100
            160,90
            180,80
            200, 110
            220, 10
            240, 70
            260, 100
            280, 100
            300, 40
            320, 0
            340, 100
            360, 100
            380, 120
            400, 60
            420, 70
            440, 80
        "
        />

    <polyline
        fill="none"
        stroke={avgColor}
        strokeWidth="2"
        points="
            00,140
            20,60
            40,80
            60,20
            80,80
            100,80
            120,60
            140,100
            160,90
            180,80
            200, 110
            220, 10
            240, 70
            260, 100
            280, 100
            300, 40
            320, 0
            340, 100
            360, 100
            380, 120
            400, 60
            420, 70
            440, 80
        "
        />

        </svg>
    </>;

export { LineChart };
