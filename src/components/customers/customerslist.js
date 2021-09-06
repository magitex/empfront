import React,{useState,useEffect }  from 'react';
import Helper from '../helpers/networks';
import { withRouter} from 'react-router-dom';
import Customers from '../customers/customers'
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Customerslist(props) {
    const [openModal,setOpenModal] = useState(false)
    const[customerslist,setCustomer] = useState([])

    async function customerList() {       
        let data;          
        data= await Helper.customerData();
        const tempcustomers =data && data.data; 
        setCustomer(tempcustomers); 
    }
    
    useEffect(()=>{ 
        customerList();
    },[])
    
    function onDelete(id){
        console.log(id)
        
            axios.delete('http://localhost:4000/customers/'+id) 
            .then(res=>{
                    console.log(res.data)   
                    customerList();         
                });
            
    };

    function editCustomer(id){
      props.history.push(`/editcustomer/${id}`);
    }
    
    return (
        <div>
            <Customers/>
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
                        {customerslist && customerslist.map((customer,key)=>(
                        <tr key={key}>
                            <td >{customer.index}</td>
                            <td>{customer.firstname}</td>
                            <td>{customer.lastname}</td>
                            <td>{customer.address1}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.gst}</td>
                            <td>
                              <button  onClick={()=>editCustomer(customer._id)}  className='btn bi bi-pencil'></button>                               
                              <i onClick={()=>setOpenModal(true)} className='btn bi bi-trash'></i>
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
                                    <h6>Are you sure you want to delete {customer.firstname}</h6> 
                                    <button  type="button" className="btn btn-success mt-4" onClick={()=>{onDelete(customer._id);setOpenModal(false)}}>Yes</button>    
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

export default withRouter(Customerslist);
