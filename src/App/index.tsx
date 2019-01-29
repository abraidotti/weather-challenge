import * as React from "react";
import * as request from "superagent";
import "./index.css";
import { LineChart } from "../LineChart";
import { Table } from "../Table";
import { DataModel, TransposedDataModel } from "../types";

const url =
  "https://storage.googleapis.com/quotapath-challenge/data/weather.json";

type AppState = {
  temperatureObject: {}[],
  polylineArray: {}[]
};

const transposeData = (data: DataModel): TransposedDataModel => {
  // let's transpose this data to make some SVG polylines for the line chart
  let polylineStringArray:string[] = [];
  let arrayIndex: number = 0;
  
  for ( let metric in data) {    
    let pixelDistance: number = 0;
    
    let polylinePoints: number[][] = data[metric].map( (index: number) => {
      return [pixelDistance++*50, (100-index).toFixed(1)];   
    })

    let polyString: string = polylinePoints.join(' ');
    polylineStringArray[arrayIndex] = polyString;
    arrayIndex++;
  }

  return [polylineStringArray];
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    temperatureObject: {}[0],
    polylineArray: {}[0],
  };

  componentDidMount() {
    request.get(url, (err, res) => {
      if (err) throw err;
      this.setState({
        temperatureObject: res.body,
      }, () => {
        let transposedData = transposeData(this.state.temperatureObject);
        this.setState({ 
          polylineArray: transposedData
        })
      });  
    })
  }

  render() {
    if (this.state.temperatureObject && this.state.polylineArray) {
      return (
        <div className="App">
          <div className = "content-item" >
            <LineChart data={this.state.polylineArray} />
          </div> 
          <div className = "content-item" >
            <Table data={this.state.temperatureObject} />
          </div>
        </div>
      )
    }
    else {
      return (
        <h1>waiting for data...</h1>
      )
    }
  }
}

export { App };
