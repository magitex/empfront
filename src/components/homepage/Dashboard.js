import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import axios from 'axios';
const monthlyData = [];

 const MonthLabels = [];


  const dailyData = [];
 const dailyLabels = [];
  const firstQuarterData = []
 const firstQuarterLabels = [];
  const secondQuarterData = []
 const secondQuarterLabels = [];

 const thirdQuarterData = []
 const thirdQuarterLabels = [];

 const fourthQuarterData = []
 const fourthQuarterLabels = [];
export default class Dashboard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: [],           
            labels: [],           
            selectedValue:"",
            monthRange:"",
            yearRange:"",
        };
        this.onChange = this.onChange.bind(this);
      }
    // state = {
    //     data: monthlyData,
    //     //average: nationalAverageData,
    //     labels: MonthLabels
    // }
    componentWillMount() {
      
      axios.get('http://localhost:4000/invoice/monthly')
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  
                  monthlyData[key]=invoice.totalSaleAmount;
                  
                  }); 
  
                   
        this.setState({
          data: monthlyData,         
          
      })
                  
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
                  this.setState({
                    labels: MonthLabels,
                    
                })
                         console.log('invDateLable',MonthLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
  }
    onChange(date, dateString) {
      console.log(date);
      this.setState({
        monthRange:dateString,
       
      })
      
  axios.get('http://localhost:4000/invoice/daily/'+dateString)
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
          this.setState({
           
            selectedValue:'monthly',
        }) 
                // console.log('invDateLable',MonthLabels);


      
      },
      error => {
       console.error(error);
      }
     );
    //    this.setState({
    //     monthRange:dateString,
    //     yearRange:dateString,
    // }) 
    }
    
    
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
          this.setState({
           
            selectedValue:'monthly',
        }) 
                // console.log('invDateLable',MonthLabels);


      
      },
      error => {
       console.error(error);
      }
     );


          
         }

         else if(e.target.value=='quarterly' || e.target.value=='1')
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
                  this.setState({
                   
                    selectedValue:'1',
                }) 
                        // console.log('invDateLable',firstQuarterLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         else if(e.target.value=='2')
         {

          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  secondQuarterData[key]=invoice.totalSaleAmount;
                  
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
                   
                      secondQuarterLabels[key]=mnthname;
                      
                  }); 
                  this.setState({
                   
                    selectedValue:'2',
                }) 
                         //console.log('invDateLable',secondQuarterLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         else if(e.target.value=='3')
         {

          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  thirdQuarterData[key]=invoice.totalSaleAmount;
                  
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
                   
                      thirdQuarterLabels[key]=mnthname;
                      
                  }); 
                  this.setState({
                   
                    selectedValue:'3',
                }) 
                        // console.log('invDateLable',thirdQuarterLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         else if(e.target.value=='4')
         {

          axios.get('http://localhost:4000/invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  fourthQuarterData[key]=invoice.totalSaleAmount;
                  
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
                   
                      fourthQuarterLabels[key]=mnthname;
                      
                  }); 

                     this.setState({
                   
                    selectedValue:'4',
                })    // console.log('invDateLable',fourthQuarterLabels);
  
  
              
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
                  //console.log('response',response.data);
  
                  response.data.map((invoice,key)=>(
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  dailyData[key]=invoice.totalSaleAmount
                  
                     )); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                    var day='' +invoice._id.day+'' ;
                    //console.log('day',day);

                      //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                      dailyLabels[key]=day;

                      
                  }); 
                  this.setState({
                   
                    selectedValue:'daily',
                })
                         //console.log('dailyLabels',dailyLabels);
  
  
              
              },
              error => {
               console.error(error);
              }
             );
         }
         console.log('dailyData',dailyData);

        const newData = isDaily? dailyData :(isMonthly ? monthlyData : (isQuarterly? firstQuarterData:(isFirstQuarter? firstQuarterData : (isSecondQuarter? secondQuarterData : (isThirdQuarter? thirdQuarterData : (isFourthQuarter? fourthQuarterData : firstQuarterData))))));
        const newLabels = isDaily? dailyLabels :(isMonthly ? MonthLabels : (isFirstQuarter? firstQuarterLabels : (isSecondQuarter? secondQuarterLabels : (isThirdQuarter? thirdQuarterLabels : (isFourthQuarter? fourthQuarterLabels : firstQuarterLabels)))));
        //const newAverage = isMonthly ? nationalAverageData : (isFirstQuarter? nationalAverageQuarterData : nationalAverageQuarterData);
        console.log('data',newData);
  
        this.setState({
            data: newData,         
            labels: newLabels,
            selectedValue:value,
        })
        console.log('dailyData',this.state);

    }    


    render() {
        const { data,average,labels } = this.state;       
        console.log("render",this.state);
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
            button = <DatePicker className="any-picker" onChange={this.onChange} picker="year" />          
          }
          else {
            button = <DatePicker onChange={this.onChange} picker="month" />
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
                    data={this.state.data}                   
                    labels={this.state.labels} />

            </div>
        )
    }
}
