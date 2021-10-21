import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
import Moment from 'moment';

ReactFC.fcRoot(FusionCharts, TimeSeries);

const schemaFetch = [{
  "name": "Time",
  "type": "date",
  "format": "%Y-%m-%d"
}, {
  "name": "Daily Visitors",
  "type": "number"
}]

const dataSource = {
  chart: {
    showlegend: 0
  },
  caption: {
    text: "Daily Visitors Count of a Website"
  },
  yaxis: [
    {
      plot: {
        value: "Daily Visitors",
        type: "column"
      },
      format: {
        suffix: "k"
      },
      title: "Daily Visitors Count"
    }
  ]
};

export class BarChartViewer extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource
      }
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/invoice/');
    const json = await response.json();
    this.onFetchData(json);

  }

  onFetchData(json) {
   //let invoice;
   console.log(json);

   let invdta = [[]];
//     const response=this.fetchFunction() ;
//     console.log('response.data',response.data);
//     invoice= response.data;
      json.map((invoice,key)=>(

invdta.push([Moment(invoice.invoicedate).format('YYYY-MM-DD'),invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next)]) 

     )); 
   Promise.all([invdta, schemaFetch]).then(res => {
     const data = res[0];
     const schema = res[1];
     const fusionTable = new FusionCharts.DataStore().createDataTable(
       data,
       schema
     );
     const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
     timeseriesDs.dataSource.data = fusionTable;
     this.setState({
       timeseriesDs
     });
   });
  }

  render() {
    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </div>
    );
  }
}
