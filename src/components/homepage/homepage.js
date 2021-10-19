import React,{useState, useMemo, useEffect } from 'react';
import './homepage.css';
import { useAuth } from "../../contexts/useAuth";
//import { Pie,Bar } from 'react-chartjs-2';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { isSameQuarter, isSameYear } from "date-fns";
//import { getData } from "./data";
import Helper from '../helpers/networks';
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";




export default function Homepage() { 
    const[value,setValue] = useState({
        selectedValue:''        
})
const[invoicelist,setinvoice] = useState([])
  async function invoiceList() {       
      let data;          
      data= await Helper.invoiceData();
      const tempeminvoice =data && data.data; 
      setinvoice(tempeminvoice); 
      console.log(data);
  }
  
  useEffect(()=>{ 
      invoiceList();
  },[])
  function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }
 let activities = [];
 invoicelist.map((invoice,key)=>(
 //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
    activities.push([toTimestamp(invoice.invoicedate),invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next)]) 

     ));
      const getData = () => [
        [946702800000, 261],
        [949381200000, 251],
        [951886800000, 282],
        [954565200000, 289],
        [957153600000, 259],
        [959832000000, 259],
        [962424000000, 256],
        [965102400000, 264],
        [967780800000, 289],
        [970372800000, 291],
        [973054800000, 254],
        [975646800000, 275],
        [978325200000, 250],
        [981003600000, 254],
        [983422800000, 227],
        [986101200000, 262],
        [988689600000, 248],
        [991368000000, 237],
        [993960000000, 257],
        [996638400000, 250],
        [999316800000, 239],
        [1001908800000, 253],
        [1004590800000, 235],
        [1007182800000, 259],
        [1009861200000, 259],
        [1012539600000, 264],
        [1014958800000, 243],
        [1017637200000, 240],
        [1020225600000, 214],
        [1022904000000, 238],
        [1025496000000, 251],
        [1028174400000, 255],
        [1030852800000, 259],
        [1033444800000, 248],
        [1036126800000, 260],
        [1038718800000, 268],
        [1041397200000, 246],
        [1044075600000, 259],
        [1046494800000, 264],
        [1049173200000, 273]
      ];
        
      
const [lineOptions, setLineOptions] = useState({
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "line",
        data: getData()
      }
    ]
  });
  const [pieOptions, setPieOptions] = useState({
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "pie",
        data: getData()
      }
    ]
  });
  const [barOptions, setBarOptions] = useState({
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "column",
        data: getData()
      }
    ]
  });

  const getProcessedData = (method) => {
    const processedData = [];
    const monthlyData = getData();

    monthlyData.forEach((el, index) => {
      if (
        index === 0 ||
        !method(new Date(el[0]), new Date(monthlyData[index - 1][0]))
      ) {
        processedData.push(el);
      } else {
        processedData[processedData.length - 1][1] += el[1];
      }
    });

    return processedData;
  };

  const yearlyData = useMemo(() => getProcessedData(isSameYear), []);
  const quarterlyData = useMemo(() => getProcessedData(isSameQuarter), []);

  const setData = (period) => {
    const processedData =
      period === "month"
        ? getData()
        : period === "year"
        ? yearlyData
        : quarterlyData;

        setLineOptions({
      series: [
        {
          data: processedData
        }
      ]
    });
        setPieOptions({
        series: [
          {
            data: processedData
          }
        ]
      });
      setBarOptions({
        series: [
          {
            data: processedData
          }
        ]
      });
  };
function handleInput(e){
    const newvalue = {...value}
    newvalue[e.target.name]=e.target.value;
    setValue(newvalue) 
}


    
    // function ShowDateMonthly(){
    //     var date = new Date();
    //     var firstDay = new Date(date.getFullYear(), date.getMonth(),2).toISOString().slice(0, 10);
    //     var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1).toISOString().slice(0, 10);      
    //     var monthly = firstDay +' to '+lastDay;
    //     console.log("monthly",monthly);      
    // }
    // function ShowDateQuarterly(){    
    //     var date = new Date();
    //     var firstDay = new Date(date.getFullYear(), date.getMonth(),2).toISOString().slice(0, 10);
    //     var lastDay = new Date(date.getFullYear(), date.getMonth() + 3, 1).toISOString().slice(0, 10);      
    //     var quarterly = firstDay +' to '+lastDay;
    //     console.log("quarterly",quarterly);     
    // }
    // function ShowDateAnnually(){      
    //     var date = new Date();
    //     var firstDay = new Date(date.getFullYear(),1).toISOString().slice(0, 7);
    //     var lastDay = new Date(date.getFullYear()+1,1).toISOString().slice(0, 7);      
    //     var annually = firstDay +' to '+lastDay;
    //     console.log("annually",annually);   
    // }

    const { currentUser } = useAuth()
    console.log('user',currentUser)

    // const data = {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         width: 50,
    //         height:50,
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   };
      function renderGraph(){
        if(value.selectedValue === 'Line')
           return   <HighchartsReact highcharts={Highcharts} options={lineOptions}/>
        else if(value.selectedValue==='Bar')
           return <HighchartsReact highcharts={Highcharts} options={barOptions}/>
        else 
             return<HighchartsReact highcharts={Highcharts} options={pieOptions} />

     }

      return (            
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <form className="d-flex">                              
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={() => setData("month")}>Monthly</button>
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={() => setData("quarter")}>Quarterly</button>
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={() => setData("year")}>Annually</button>
                                </form>
                            </div>
                            <h4 className="page-title">Dashboard</h4>
                        </div>
                    </div>
                </div>  
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card widget-flat">
                                <div className="card-body">
                                    <div className="float-end">
                                        <i className="mdi mdi-account-multiple widget-icon bg-success-lighten text-success"></i>
                                    </div>
                                    <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Customers</h5>
                                    <h3 className="mt-3 mb-3">36,254</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                                        <span className="text-nowrap">Since last month</span>  
                                    </p>
                                </div> 
                            </div> 
                        </div>

                        <div className="col-lg-6">
                            <div className="card widget-flat">
                                <div className="card-body">
                                    <div className="float-end">
                                        <i className="mdi mdi-cart-plus widget-icon bg-danger-lighten text-danger"></i>
                                    </div>
                                    <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Orders</h5>
                                    <h3 className="mt-3 mb-3">5,543</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card widget-flat">
                                <div className="card-body">
                                    <div className="float-end">
                                        <i className="mdi mdi-currency-usd widget-icon bg-info-lighten text-info"></i>
                                    </div>
                                    <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                                    <h3 className="mt-3 mb-3">$6,254</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </div> 
                            </div> 
                        </div> 

                        <div className="col-lg-6">
                            <div className="card widget-flat">
                                <div className="card-body">
                                    <div className="float-end">
                                        <i className="mdi mdi-pulse widget-icon bg-warning-lighten text-warning"></i>
                                    </div>
                                    <h5 className="text-muted fw-normal mt-0" title="Growth">Growth</h5>
                                    <h3 className="mt-3 mb-3">+ 30.56%</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="card card-h-100">
                            <div className="card-body">                                                        
                            <div className="container-fluid ">
                                <div className="row d-flex justify-content-between">
                                    <div className="col">
                                    <h3 className="header-title mb-3">Projections Vs Actuals</h3>
                                    </div>
                                    <div className="col">
                                    <DateRangePickerComponent id="daterangepicker" />
                                    </div>
                                    <div className="col">
                                    <div className="dropdown float-end">
                                    <select className="form-select" value={value.selectedValue} name='selectedValue' onChange={(e)=>handleInput(e)} aria-label="Default select example">
                                    <option defaultValue disabled>Select Graph Type</option>
                                    <option value="Pie">Pie</option>
                                    <option value="Bar">Bar</option>
                                    <option value="Line">Line</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div>
                                    { renderGraph() }
                                    </div>  
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                   
                </div>      
            </div>
        )
    
}
