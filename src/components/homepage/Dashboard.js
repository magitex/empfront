import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import Helper from '../helpers/networks';
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
            selectedValue:"monthly",
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
      
      axios.get(process.env.REACT_APP_BASE_URL+'invoice/monthly')
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  
                  monthlyData[key]=invoice.totalSaleAmount;
                  return true;
                  
                  }); 
  
                   
        this.setState({
          data: monthlyData,         
          
      })
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                        default:
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
                      return true;
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
      console.log('dateString',dateString);
      this.setState({
        monthRange:dateString,
       
      })
<<<<<<< HEAD
      if(this.state.selectedValue=='monthly')
              {
                const  monthlyData1=[];
                const  MonthLabels1=[];
  axios.get('http://localhost:4000/invoice/monthly/'+dateString)
=======
      
  axios.get(process.env.REACT_APP_BASE_URL+'invoice/daily/'+dateString)
>>>>>>> f44e9b123d6435b63384c873d3f07a0b334f101f
  .then(
      response => {
          console.log('response',response.data);

          response.data.map((invoice,key)=>{
            console.log('ttl',invoice.totalSaleAmount);
          //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
<<<<<<< HEAD
          monthlyData1[key]=invoice.totalSaleAmount;
          
=======
          monthlyData[key]=invoice.totalSaleAmount;
          return true;
>>>>>>> f44e9b123d6435b63384c873d3f07a0b334f101f
          }); 

           
          
          response.data.map((invoice,key)=>{
              var mnthname='';
              switch(invoice._id) {
                default:
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
           
<<<<<<< HEAD
              MonthLabels1[key]=mnthname;
              
=======
              MonthLabels[key]=mnthname;
              return true;
>>>>>>> f44e9b123d6435b63384c873d3f07a0b334f101f
          }); 
          this.setState({
            data: monthlyData1,         
        labels: MonthLabels1,
            selectedValue:'monthly',
        })
          
                 //console.log('invDateLable',MonthLabels);


      
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
    else if(this.state.selectedValue=='daily')
              {
                const  dailyData1=[];
                const  dailyLabels1=[];
  axios.get('http://localhost:4000/invoice/daily/'+dateString)
  .then(
    response => {
      console.log('response',response.data);

        response.data.map((invoice,key)=>(
        //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
        dailyData1[key]=invoice.totalSaleAmount
        
           )); 

         
        
        response.data.map((invoice,key)=>{
          var day='' +invoice._id.day+'' ;
          //console.log('day',day);

            //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
            dailyLabels1[key]=day;

            
        }); 
        
   
        this.setState({
          data: dailyData1,         
      labels: dailyLabels1,
          selectedValue:'daily',
      })
               console.log('prev',this.state);
               console.log('data111',dailyData1);
               console.log('dailyLabels',dailyLabels1);


    
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
    else if(this.state.selectedValue=='quarterly' || this.state.selectedValue=='1')
    {
      const  firstQuarterData1=[];
      const  firstQuarterLabels1=[];
     axios.get('http://localhost:4000/invoice/quarterly/'+dateString)
     .then(
         response => {
             console.log('response',response.data);

             response.data.map((invoice,key)=>{
               console.log('ttl',invoice.totalSaleAmount);
             //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
             firstQuarterData1[key]=invoice.totalSaleAmount;
             
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
              
                 firstQuarterLabels1[key]=mnthname;
                 
             }); 
             this.setState({
              data: firstQuarterData1,         
          labels: firstQuarterLabels1,
              selectedValue:'quarterly',
          })
                   // console.log('invDateLable',firstQuarterLabels);


         
         },
         error => {
          console.error(error);
         }
        );
    }
    else if(this.state.selectedValue=='2')
    {
      const  secondQuarterData1=[];
      const  secondQuarterLabels1=[];
     axios.get('http://localhost:4000/invoice/2/'+dateString)
     .then(
         response => {
             console.log('response',response.data);

             response.data.map((invoice,key)=>{
               console.log('ttl',invoice.totalSaleAmount);
             //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
             secondQuarterData1[key]=invoice.totalSaleAmount;
             
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
              
                 secondQuarterLabels1[key]=mnthname;
                 
             }); 
             this.setState({
              data: secondQuarterData1,         
          labels: secondQuarterLabels1,
              selectedValue:'2',
          })
                    //console.log('invDateLable',secondQuarterLabels);


         
         },
         error => {
          console.error(error);
         }
        );
    }
    else if(this.state.selectedValue=='3')
    {
      const  thirdQuarterData3=[];
      const  thirdQuarterLabels3=[];
     axios.get('http://localhost:4000/invoice/3/'+dateString)
     .then(
         response => {
             console.log('response',response.data);

             response.data.map((invoice,key)=>{
               console.log('ttl',invoice.totalSaleAmount);
             //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
             thirdQuarterData3[key]=invoice.totalSaleAmount;
             
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
              
                 thirdQuarterLabels3[key]=mnthname;
                 
             }); 
             this.setState({
              data: thirdQuarterData3,         
          labels: thirdQuarterLabels3,
              selectedValue:'3',
          })
                   // console.log('invDateLable',thirdQuarterLabels);


         
         },
         error => {
          console.error(error);
         }
        );
    }
    else if(this.state.selectedValue=='4')
    {
      const  fourthQuarterData1=[];
      const  fourthQuarterLabels1=[];
     axios.get('http://localhost:4000/invoice/4/'+dateString)
     .then(
         response => {
             console.log('response',response.data);

             response.data.map((invoice,key)=>{
               console.log('ttl',invoice.totalSaleAmount);
             //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
             fourthQuarterData1[key]=invoice.totalSaleAmount;
             
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
              
                 fourthQuarterLabels1[key]=mnthname;
                 
             }); 
             this.setState({
              data: fourthQuarterData1,         
          labels: fourthQuarterLabels1,
              selectedValue:'4',
          })
            // console.log('invDateLable',fourthQuarterLabels);


         
         },
         error => {
          console.error(error);
         }
        );
    }
    //console.log('dailyData',dailyData);

    console.log('state',this.state);

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
<<<<<<< HEAD
        //let data;          
        //data= await Helper.invoicegraphData();
       if(e.target.value=='monthly')
=======
       if(e.target.value==='monthly')
>>>>>>> f44e9b123d6435b63384c873d3f07a0b334f101f
         {

  axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
  .then(
      response => {
          console.log('response',response.data);

          response.data.map((invoice,key)=>{
            console.log('ttl',invoice.totalSaleAmount);
          //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
          monthlyData[key]=invoice.totalSaleAmount;
          return true;
          }); 

           
          
          response.data.map((invoice,key)=>{
              var mnthname='';
              switch(invoice._id) {
                default:
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
              return true;
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

         else if(e.target.value==='quarterly' || e.target.value==='1')
         {

          axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  firstQuarterData[key]=invoice.totalSaleAmount;
                  return true;
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                        default:
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
                      return true;
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
         else if(e.target.value==='2')
         {

          axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  secondQuarterData[key]=invoice.totalSaleAmount;
                  return true;
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                        default:
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
                      return true;
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
         else if(e.target.value==='3')
         {

          axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  thirdQuarterData[key]=invoice.totalSaleAmount;
                  return true;
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                        default:
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
                      return true;
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
         else if(e.target.value==='4')
         {

          axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
          .then(
              response => {
                  console.log('response',response.data);
  
                  response.data.map((invoice,key)=>{
                    console.log('ttl',invoice.totalSaleAmount);
                  //total=invoice.invoiceDetails.map(item => eval(item.totalamount)).reduce((prev, next) => prev + next);
                  fourthQuarterData[key]=invoice.totalSaleAmount;
                  return true;
                  }); 
  
                   
                  
                  response.data.map((invoice,key)=>{
                      var mnthname='';
                      switch(invoice._id) {
                        default:
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
                      return true;
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
          axios.get(process.env.REACT_APP_BASE_URL+'invoice/'+e.target.value)
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
                      return true;
                      
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
        const { data,labels} = this.state;       
        console.log("render",this.state);
        let button;
        if (this.state.selectedValue==="quarterly" || this.state.selectedValue==="1" || this.state.selectedValue==="2" 
        || this.state.selectedValue==="3" || this.state.selectedValue==="4") {
            button = 
            <div>
            <select className="form-select" onChange={this.handleButtonClick} aria-label="Default select example">
                        <option defaultValue className="dropdown-default">Select Quarter</option>
                        <option value="1">1st Quarter</option>
                        <option value="2">2nd Quarter</option>
                        <option value="3">3rd Quarter</option>
                        <option value="4">4th Quarter</option>                                                                    
                    </select>
                    <DatePicker className="any-picker" onChange={this.onChange} picker="year" />
                      </div>;
          } else if(this.state.selectedValue==="daily") {
            button =  <DatePicker onChange={this.onChange} picker="month" />
          }
          else {
            button =<DatePicker className="any-picker" onChange={this.onChange} picker="year" />          
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
                    labels={labels} />

            </div>
        )
    }
}
