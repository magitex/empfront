import React,{useState,useEffect}  from 'react';
import { withRouter } from 'react-router-dom';
import Helper from '../helpers/networks';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";

function Editproject(props) {
    let { id } = useParams();  
    const history=useHistory();

    const[data,setData] = useState({
        name:'',
        module:'',  
        estimatedtime:'',  
        status:'',    
})

async function getProject(id) {
    let data   
    data= await Helper.projectDetail(id);
    const tempprojects =data && data.data; 
    setData(tempprojects);  
}

async function handlesubmit(id){
    let data1;   
    data1= await Helper.updateProject(id,data);
    const tempprojects =data1 && data1.data; 
    history.push('/projectlist');
    console.log("Message:",tempprojects)
    
}

useEffect(()=>{ 
    getProject(id);
},[id])

function handleInput(e){
    const newdata = {...data}
    newdata[e.target.name]=e.target.value;
    setData(newdata)    
}
   
return (
    <div  className='container pt-1'>
        <h3>Edit Project</h3>
        <form>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example1">Name</label>
                    <input 
                    type="text" id='name' value={data.name} name='name' onChange={(e)=>handleInput(e)} className="form-control" required/>                            
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example2">Module</label> 
                    <input id='module' type="text" value={data.module} name='module' onChange={(e)=>handleInput(e)} className="form-control" required />                           
                </div>
                </div>
            </div>
            
            <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example3">Estimated Time</label>
                <input id='time' type="text" value={data.estimatedtime} name='estimatedtime' onChange={(e)=>handleInput(e)} className="form-control" required/>                       
            </div>
    
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form6Example4">Status</label>
                <input id='status' type="text" value={data.status} name='status' onChange={(e)=>handleInput(e)} className="form-control" required/>                       
            </div>     

            <button type="button" onClick={(e)=>handlesubmit(id)} className="btn btn-primary btn-block mb-4">UPDATE</button>
        </form>                
    </div>
)
    
}

export default withRouter(Editproject)
