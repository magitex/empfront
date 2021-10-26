import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import axios from 'axios';
import { secondQuarterData,thirdQuarterData,fourthQuarterData, secondQuarterLabels,thirdQuarterLabels,fourthQuarterLabels } from "./mockData";

const monthlyData = [];

 const MonthLabels = [];
  const dailyData = [];
 const dailyLabels = [];
  const firstQuarterData = []
 const firstQuarterLabels = [];

export default class Dashboard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: monthlyData,           
            labels: MonthLabels,           
            selectedValue:"",
        };
        
      }
    // state = {
    //     data: monthlyData,
    //     //average: nationalAverageData,
    //     labels: MonthLabels
    // }

 
    
    
    handleButtonClick = e => {
        const { value } = e.target;
        console.log(value)
      
        const isDaily = value === "daily";
        const isMonthly = value === "monthly";
        const isQuarterly = value === "quarterly";
        const isFirstQuarter = value === "1";
        const isSecondQuarter = value === "2";
        const isThirdQuarter = value === "3";
        const isFourthQuarter = value === "4";
       if(e.target.value=='monthly')
         {

          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  monthlyData[key]=invoice.totalSaleAmount;
                  
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                          case '01':
                           mnthname='January';
                            break;
                          case '02':
                              mnthname='February';
  
                            break;
                          case '03':
                              mnthname='March';
  
                            break;
                            case '04':
                              mnthname='April';
  
                            break;
                            case '05':
                              mnthname='May';
  
                            break;
                            case '06':
                              mnthname='June';
  
                            break;
                            case '07':
                              mnthname='July';
  
                            break;
                            case '08':
                              mnthname='August';
  
                            break;
                            case '09':
                              mnthname='September';
  
                            break;
                            case '10':
                              mnthname='October';
  
                            break;
                            case '11':
                              mnthname='November';
  
                            break;
                            case '12':
                              mnthname='December';
  
                            break;
                            
                        } 
                      //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                   
                      MonthLabels[key]=mnthname;
                      
                  }); 
                         console.log('invDateLable',MonthLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         else if(e.target.value=='quarterly')
         {

          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  firstQuarterData[key]=invoice.totalSaleAmount;
                  
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                          case '01':
                           mnthname='January';
                            break;
                          case '02':
                              mnthname='February';
  
                            break;
                          case '03':
                              mnthname='March';
  
                            break;
                            case '04':
                              mnthname='April';
  
                            break;
                            case '05':
                              mnthname='May';
  
                            break;
                            case '06':
                              mnthname='June';
  
                            break;
                            case '07':
                              mnthname='July';
  
                            break;
                            case '08':
                              mnthname='August';
  
                            break;
                            case '09':
                              mnthname='September';
  
                            break;
                            case '10':
                              mnthname='October';
  
                            break;
                            case '11':
                              mnthname='November';
  
                            break;
                            case '12':
                              mnthname='December';
  
                            break;
                            
                        } 
                      //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                   
                      firstQuarterLabels[key]=mnthname;
                      
                  }); 
                         console.log('invDateLable',firstQuarterLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         else
         {
          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>(
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  dailyData[key]=invoice.totalSaleAmount
                  
                     )); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                    var day='' +invoice._id.day+'' ;
                    console.log('day',day);

                      //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                      dailyLabels[key]=day;

                      
                  }); 
                         console.log('dailyLabels',dailyLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
       
        const newData = isDaily? dailyData :(isMonthly ? monthlyData : (isQuarterly? firstQuarterData:(isFirstQuarter? firstQuarterData : (isSecondQuarter? secondQuarterData : (isThirdQuarter? thirdQuarterData : (isFourthQuarter? fourthQuarterData : firstQuarterData))))));
        const newLabels = isDaily? dailyLabels :(isMonthly ? MonthLabels : (isFirstQuarter? firstQuarterLabels : (isSecondQuarter? secondQuarterLabels : (isThirdQuarter? thirdQuarterLabels : (isFourthQuarter? fourthQuarterLabels : firstQuarterLabels)))));
        //const newAverage = isMonthly ? nationalAverageData : (isFirstQuarter? nationalAverageQuarterData : nationalAverageQuarterData);

        this.setState({
            data: newData,         
            labels: newLabels,
            selectedValue:value,
        })
    }    


    render() {
        const { data,average,labels } = this.state;       
        console.log("render",this.state.selectedValue);
        let button;
        if (this.state.selectedValue==="quarterly" || this.state.selectedValue==="1" || this.state.selectedValue==="2" 
        || this.state.selectedValue==="3" || this.state.selectedValue==="4") {
            button = <select className="form-select" onChange={this.handleButtonClick} aria-label="Default select example">
                        <option defaultValue className="dropdown-default">Select Quarter</option>
                        <option value="1">1st Quarter</option>
                        <option value="2">2nd Quarter</option>
                        <option value="3">3rd Quarter</option>
                        <option value="4">4th Quarter</option>                                                                    
                    </select>;
          } else if(this.state.selectedValue==="monthly") {
            button = <div>monthly</div>;
          }
          else {
            button = <div>daily</div>;
          }
        return (
            
              
                <div>       
       
            

                <div className={classes.buttonContainer}>               
                    <button
                        value="daily"
                        onClick={this.handleButtonClick}
                    >
                        Daily
                    </button>

                    <button
                        value="monthly"
                        onClick={this.handleButtonClick}
                    >
                        Monthly
                    </button>    

                    <button
                        value="quarterly"
                        onClick={this.handleButtonClick}
                    >
                        Quarterly
                    </button>                  
                    { button }
                   
                </div>
               
                <LineGraph
                    data={data}
                    average={average}
                    labels={labels} />

            </div>
        )
    }
}
