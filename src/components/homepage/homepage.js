import React from 'react';
import './homepage.css';
import { useAuth } from "../../contexts/useAuth";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";




export default function Homepage() { 
    
    function ShowDateMonthly(){
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(),2).toISOString().slice(0, 10);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1).toISOString().slice(0, 10);      
        var monthly = firstDay +' to '+lastDay;
        console.log("monthly",monthly);      
    }
    function ShowDateQuarterly(){    
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(),2).toISOString().slice(0, 10);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 3, 1).toISOString().slice(0, 10);      
        var quarterly = firstDay +' to '+lastDay;
        console.log("quarterly",quarterly);     
    }
    function ShowDateAnnually(){      
        var date = new Date();
        var firstDay = new Date(date.getFullYear(),1).toISOString().slice(0, 7);
        var lastDay = new Date(date.getFullYear()+1,1).toISOString().slice(0, 7);      
        var annually = firstDay +' to '+lastDay;
        console.log("annually",annually);   
    }

    const { currentUser } = useAuth()
    console.log('user',currentUser)
      return (            
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <form className="d-flex">                              
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={ShowDateMonthly}>Monthly</button>
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={ShowDateQuarterly}>Quarterly</button>
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={ShowDateAnnually}>Annually</button>
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
                                    <select className="form-select" aria-label="Default select example">
                                    <option defaultValue>Select Graph Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>  
                
                <div className="row">
                
                </div>    
            </div>
        )
    
}
