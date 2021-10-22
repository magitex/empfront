import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import { dailyData,monthlyData,  MonthLabels, firstQuarterData,secondQuarterData,thirdQuarterData,fourthQuarterData, firstQuarterLabels,secondQuarterLabels,thirdQuarterLabels,fourthQuarterLabels, dailyLabels } from "./mockData";


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
