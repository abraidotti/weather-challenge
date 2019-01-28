import * as React from "react";
import * as request from "superagent";
import "./index.css";
import { LineChart } from "../LineChart";
import { Table } from "../Table";
// import { DataModel, TransposedDataModel } from "../types";

const url =
  "https://storage.googleapis.com/quotapath-challenge/data/weather.json";

type AppState = {
  temperatureObject: {},
};

// const transposeData = (data: DataModel): TransposedDataModel => {
//   return [data];
// };

class App extends React.Component<{}, AppState> {
  state: AppState = {
   temperatureObject: {}
  };

  componentDidMount() {
    request.get(url, (err, res) => {
      if (err) throw err;
        this.setState({
          temperatureObject: res.body
        }, () => {
        console.log("temperatures saved:", this.state.temperatureObject)
        
        console.log("temperatures transposed now")
        });
      
    })



  }

  render() {
    return (
      <div className="App">
        < div className = "content-item" >
          <LineChart />
        </div> 
        <div className = "content-item" >
          <Table />
        </div>
      </div>
    );
  }
}

export { App };
