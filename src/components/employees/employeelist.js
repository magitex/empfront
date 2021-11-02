import React,{useState,useEffect }  from 'react';
import Helper from '../helpers/networks';
import { withRouter } from 'react-router-dom';
import Employees from '../employees/employees';
import axios from 'axios';
import Modal from 'react-modal';
import Pdf from "react-to-pdf";


Modal.setAppElement('#root')

function Employeeslist(props) {
    const [openModal,setOpenModal] = useState(false)
    const[employeeslist,setEmployees] = useState([])
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10,5]
    };
    const [deleteid,setdeleteid] = useState();
    const [deletename,setdeletename] = useState();

    async function employeeList() {       
        let data;          
        data= await Helper.employeeData();
        const tempemployees =data && data.data; 
        setEmployees(tempemployees);
        console.log(data);
    }
    
    useEffect(()=>{ 
        employeeList();
    },[])
    
    function onDelete(id){
        console.log(id)
        
            axios.delete(process.env.REACT_APP_BASE_URL+'employees/'+id) 
            .then(res=>{
                    console.log(res.data)   
                    employeeList();         
                });
            
    };

    function editEmployee(id){
      props.history.push(`/editemployees/${id}`);
    }
    return (
        <div>
        <Employees />
            <div>
                <table className="container table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Adress</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>GST</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>                                                            
                        {employeeslist && employeeslist.map((employee,key)=>(
                        <tr key={key}  ref={ref}>
                            <td >{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.address1}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.gst}</td>
                            <td>
                            <Pdf targetRef={ref} filename="emp.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </Pdf>
                              <button  onClick={()=>editEmployee(employee._id)}  className='btn bi bi-pencil'></button>                               
                              <i onClick={()=>{setOpenModal(true);setdeleteid(employee._id);setdeletename(employee.firstname)}} className='btn bi bi-trash'></i>
                                <Modal 
                                isOpen={openModal} 
                                onRequestClose={()=>setOpenModal(false)}
                                style={
                                    {
                                        overlay:{
                                            position:'fixed',
                                            top:0,
                                            left:0,
                                            right:0,
                                            bottom:0,
                                            backgroundColor:'grey'
                                        },
                                        content:{
                                            position:'obsolute',
                                            marginTop:'2rem',
                                            marginLeft:'25rem',
                                            marginRight:'25rem'
                                            
                                        }
                                    }
                                }>
                                    <h6>Are you sure you want to delete {deletename}</h6> 
                                    <button  type="button" className="btn btn-success mt-4" onClick={()=>{onDelete(deleteid);setOpenModal(false)}}>Yes</button>    
                                    <button  type="button" className="btn btn-danger ms-2 mt-4" onClick={()=>setOpenModal(false)}>cancel</button>     
                                </Modal>
                            </td>
                        </tr>
                         ))}                                                                                                                                                                                
                    </tbody>
                </table>    
           </div>
           </div>
    )
}

export default withRouter(Employeeslist);
