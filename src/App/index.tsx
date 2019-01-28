import * as React from "react";
// import * as request from "superagent";
import "./index.css";
import { LineChart } from "../LineChart";
import { Table } from "../Table";
// import { TableHeader } from "../TableHeader";
// import { TableRow } from "../TableRow";
import { DataModel, TransposedDataModel } from "../types";

const url =
  "https://storage.googleapis.com/quotapath-challenge/data/weather.json";

type AppState = {};

const transposeData = (data: DataModel): TransposedDataModel => {
  return [];
};


class App extends React.Component<{}, AppState> {
  state: AppState = {};

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="content-item">
          <LineChart />
        </div>
        <div className="content-item">
          <Table />
        </div>
      </div>
    );
  }
}

export { App };
