import config from './config';
import axios from 'axios';
//var qs = require('qs');
const serverUrl = config.baseUrl;


const Network = {
    employeeData: async () => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.employeeData,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    employeeDetail: async (employeeid) => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.employeeDetail+'/'+employeeid,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    updateEmployee: async (employeeid,employeeDetail) => {
        return new Promise((resolve, reject) => {
            console.log('data',employeeDetail);
            var data = {
                firstname:employeeDetail.firstname,
                lastname:employeeDetail.lastname,  
                address1:employeeDetail.address1,  
                address2:employeeDetail.address2,
                city:employeeDetail.city, 
                state:employeeDetail.state,  
                country:employeeDetail.country,   
                zipcode:employeeDetail.zipcode,   
                email:employeeDetail.email,   
                phone:employeeDetail.phone,   
                gst:employeeDetail.gst,
                picture:employeeDetail.picture,
            };
            axios({
                url: serverUrl + config.updateEmployee+'/'+employeeid,
                method: 'post',
                data: data,
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    }, 
    deleteEmployee: async (employeeid,employeeDetail) => {
        return new Promise((resolve, reject) => {
            console.log('data',employeeDetail);
            var data = {
                firstname:employeeDetail.firstname,
                lastname:employeeDetail.lastname,  
                address1:employeeDetail.address1,  
                address2:employeeDetail.address2,
                city:employeeDetail.city, 
                state:employeeDetail.state,  
                country:employeeDetail.country,   
                zipcode:employeeDetail.zipcode,   
                email:employeeDetail.email,   
                phone:employeeDetail.phone,   
                gst:employeeDetail.gst,
                picture:employeeDetail.picture,
            };
            axios({
                url: serverUrl + config.deleteEmployee+'/'+employeeid,
                method: 'post',
                data: data,
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    customerData: async () => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.customerData,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },  
    customerDetail: async (customerid) => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.customerDetail+'/'+customerid,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    updateCustomer: async (customerid,customerDetail) => {
        return new Promise((resolve, reject) => {
            console.log('data',customerDetail);
            var data = {
                firstname:customerDetail.firstname,
                lastname:customerDetail.lastname,  
                address1:customerDetail.address1,  
                address2:customerDetail.address2,
                city:customerDetail.city, 
                state:customerDetail.state,  
                country:customerDetail.country,   
                zipcode:customerDetail.zipcode,   
                email:customerDetail.email,   
                phone:customerDetail.phone,   
                gst:customerDetail.gst,
            };
            axios({
                url: serverUrl + config.updateCustomer+'/'+customerid,
                method: 'post',
                data: data,
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    projectData: async () => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.projectData,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },  
    projectDetail: async (projectid) => {
        return new Promise((resolve, reject) => {
        
            axios({
                url: serverUrl + config.projectDetail+'/'+projectid,
                method: 'get',
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    },
    updateProject: async (projectid,projectDetail) => {
        return new Promise((resolve, reject) => {
            console.log('data',projectDetail);
            var data = {
                name:projectDetail.name,
                module:projectDetail.module,  
                estimatedtime:projectDetail.estimatedtime,  
                status:projectDetail.status,               
            };
            axios({
                url: serverUrl + config.updateProject+'/'+projectid,
                method: 'post',
                data: data,
              
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    }, 
};


export default Network;

