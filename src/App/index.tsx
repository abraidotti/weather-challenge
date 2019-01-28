import * as React from "react";
import * as request from "superagent";
import "./index.css";
import { LineChart } from "../LineChart";
import { Table } from "../Table";
import { DataModel, TransposedDataModel } from "../types";

const url =
  "https://storage.googleapis.com/quotapath-challenge/data/weather.json";

type AppState = {};

const transposeData = (data: DataModel): TransposedDataModel => {
  return [data];
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    cheese: 'ham'
  };

  componentDidMount() {
    request.get(url, (err, res) => {
      if (err) throw err;
      console.log(res.text)
      console.table(transposeData(res.text))
    });
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
