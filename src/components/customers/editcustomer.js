import React,{useState,useEffect}  from 'react';
import { withRouter } from 'react-router-dom';
import Helper from '../helpers/networks';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";


function Editcustomer(props) {
    let { id } = useParams();  
    const history=useHistory();

    const[data,setData] = useState({
        firstname:'',
        lastname:'',  
        address1:'',  
        address2:'',
        city:'', 
        state:'',  
        country:'',   
        zipcode:'',   
        email:'',   
        phone:'',   
        gst:'',
})

async function getCustomer(id) {
    
    let data   
    data= await Helper.customerDetail(id);
    const tempcustomer =data && data.data;     
    setData(tempcustomer); 
}   


async function handlesubmit(id){
    let data1;   
    data1= await Helper.updateCustomer(id,data);
    const tempcustomer =data1 && data1.data; 
    history.push('/customerslist');
    console.log("Message:",tempcustomer)
    
}
     
useEffect(()=>{ 
    getCustomer(id);
},[id])

function handleInput(e){
    const newdata = {...data}
    newdata[e.target.name]=e.target.value;
    setData(newdata)    
}

        return (
            <div className='container pt-1'>
                <form method="post"  name='updateForm' id='formupdate'>
                <h3>Edit Customer</h3>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">First name</label>
                            <input id='firstname' type="text" value={data.firstname} name='firstname' onChange={(e)=>handleInput(e)} className="form-control" required/>                                                        
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Last name</label>
                            <input id='lastname' type="text" value={data.lastname} name='lastname' onChange={(e)=>handleInput(e)} className="form-control" required/>                                                      
                        </div>
                        </div>
                    </div>                   
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example3">Address Line 1</label>
                        <input id='address1' type="text" value={data.address1} name='address1' onChange={(e)=>handleInput(e)} className="form-control" required/>                                               
                    </div>        
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example4">Address Line 2</label>
                        <input id='address2' type="text" value={data.address2} name='address2' onChange={(e)=>handleInput(e)} className="form-control" required/>                         
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example5">City</label>
                            <input id='city' type="text"  value={data.city} name='city' onChange={(e)=>handleInput(e)}  className="form-control" required/>                                                   
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">State</label>
                            <input id='state' type="text" value={data.state} name='state' onChange={(e)=>handleInput(e)} className="form-control" required/>                             
                        </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example6">Country</label>
                            <input id='country' type="text" value={data.county} name='country' onChange={(e)=>handleInput(e)} className="form-control" required/>                             
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example7">Zipcode</label>
                            <input id='zipcode' type="number" value={data.zipcode} name='zipcode' onChange={(e)=>handleInput(e)}  className="form-control" required/>                                                       
                        </div>
                        </div>
                    </div>           
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example8">Email</label>
                        <input id='email' type="email" value={data.email} name='email' onChange={(e)=>handleInput(e)} className="form-control" required/>                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">Phone</label>
                        <input id='phone' type="number" value={data.phone} name='phone' onChange={(e)=>handleInput(e)} className="form-control" required/>                        
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example9">GST#</label>
                        <input id='gst' type="number" value={data.gst} name='gst' onChange={(e)=>handleInput(e)} className="form-control" required/>                         
                    </div>                                               
                    <button type="button" onClick={(e)=>handlesubmit(id)} className="btn btn-primary btn-block mb-4">UPDATE</button>
                </form>
            </div>
        )
    
}

export default withRouter(Editcustomer);
