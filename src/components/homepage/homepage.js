import React,{useState,  useEffect } from 'react';
import './homepage.css';
import { useAuth } from "../../contexts/useAuth";
//import { SimpleTimeSeries } from './ChartViewer';
//import { Pie,Bar } from 'react-chartjs-2';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
//import { isSameQuarter, isSameYear } from "date-fns";
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
        selectedMonth:'',
        selectedYear:'',
        selectedValue:'' ,    
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
     console.log(activities);  
      
const lineOptions = {
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "line",
        data: activities
      }
    ]
  };
  const pieOptions = {
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "pie",
        data: activities
      }
    ]
  };
  const barOptions = {
    title: { text: "Time series data" },
    xAxis: { type: "datetime" },
    series: [
      {
        name: "foo",
        type: "column",
        data: activities
      }
    ]
  };

//   const getProcessedData = (method) => {
//     const processedData = [];
//     const monthlyData = activities
//     monthlyData.forEach((el, index) => {
//       if (
//         index === 0 ||
//         !method(new Date(el[0]), new Date(monthlyData[index - 1][0]))
//       ) {
//         processedData.push(el);
//       } else {
//         processedData[processedData.length - 1][1] += el[1];
//       }
//     });

//     return processedData;
//   };

//   const yearlyData = useMemo(() => getProcessedData(isSameYear), []);
//   const quarterlyData = useMemo(() => getProcessedData(isSameQuarter), []);

//   const setData = (period) => {
//     const processedData =
//       period === "month"
//         ? activities
//         : period === "year"
//         ? yearlyData
//         : quarterlyData;

//         setLineOptions({
//       series: [
//         {
//           data: processedData
//         }
//       ]
//     });
//         setPieOptions({
//         series: [
//           {
//             data: processedData
//           }
//         ]
//       });
//       setBarOptions({
//         series: [
//           {
//             data: processedData
//           }
//         ]
//       });
//   };
function handleInput(e){
    const newvalue = {...value}
    newvalue[e.target.name]=e.target.value;
    setValue(newvalue) 
    console.log(newvalue.selectedValue)
    console.log(newvalue.selectedMonth)
    console.log(newvalue.selectedYear)
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
                                <div className="dropdown float-end dropdown-month">
                                    <select className="form-select" value={value.selectedMonth} name='selectedMonth' onChange={(e)=>handleInput(e)} aria-label="Default select example">
                                    <option defaultValue className="dropdown-default">Select month</option>
                                    <option value="1">1 Month</option>
                                    <option value="2">2 months</option>
                                    <option value="3">3 months</option>
                                    <option value="4">4 months</option>
                                    <option value="5">5 months</option>
                                    <option value="6">6 months</option>
                                    <option value="7">7 months</option>
                                    <option value="8">8 months</option>
                                    <option value="9">9 months</option>
                                    <option value="10">10 months</option>
                                    <option value="11">11 months</option>
                                    <option value="12">12 months</option>
                                    </select>
                                </div>
                                <div className="dropdown float-end dropdown-month">
                                    <select className="form-select" value={value.selectedYear} name='selectedYear' onChange={(e)=>handleInput(e)} aria-label="Default select example">
                                    <option defaultValue className="dropdown-default">Select Year</option>
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    <option value="5">5 Years</option>                                   
                                    </select>
                                </div>                              
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
                                    <option defaultValue className="dropdown-default" >Select Graph Type</option>
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
