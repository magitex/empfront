import React from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';
import './chartviewer.css';

ReactFC.fcRoot(FusionCharts, TimeSeries);

//const jsonify = res => res.json();
const dataFetch = [
  [
      "1/1/2021",
      16.448
  ],
  [
    "2/1/2021",
      272.736
  ],
  [
    "3/1/2021",
      11.784
  ],
  [
    "4/1/2021",
      1233.54
  ],
  [
    "8/1/2021",
      19.536
  ],
  [
    "10/1/2021",
      2573.82
  ],
  [
    "10/1/2022",
      2573.82
  ],
  [
    "10/1/2023",
      2573.82
  ],
]
const schemaFetch = [
  {
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
  },
  {
    "name": "Sales",
    "type": "number"
  }
]


export class SimpleTimeSeries extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '600',
        height: '400',
        dataSource: {
          caption: { text: 'Online Sales of a SuperStore in the US' },
          data: null,
          yAxis: [
            {
              plot: [
                {
                  value: 'Sales ($)'
                }
              ]
            }
          ]
        }
      }
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
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
          'loading'
        )}
      </div>
    );
  }
}