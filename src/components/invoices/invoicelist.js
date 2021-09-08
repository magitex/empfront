import React,{useState,useEffect }  from 'react';
import Helper from '../helpers/networks';
import { withRouter } from 'react-router-dom';
import Invoice from '../invoices/invoice';
import axios from 'axios';
import Modal from 'react-modal';
import Pdf from "react-to-pdf";


Modal.setAppElement('#root')

function Invoicelist(props) {
    const [openModal,setOpenModal] = useState(false)
    const[invoicelist,setinvoice] = useState([])
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10,5]
    };
    const [deleteid,setdeleteid] = useState();
    const [deletename,setdeletename] = useState();

    async function invoiceList() {       
        let data;          
        data= await Helper.invoiceData();
        const tempeminvoice =data && data.data; 
        setinvoice(tempeminvoice); 
    }
    
    useEffect(()=>{ 
        invoiceList();
    },[])
    
    function onDelete(id){
        console.log(id)
        
            axios.delete('http://localhost:4000/invoice/'+id) 
            .then(res=>{
                    console.log(res.data)   
                    invoiceList();         
                });
            
    };

    function editEmployee(id){
      props.history.push(`/editemployees/${id}`);
    }
    return (
        <div>
        <Invoice />
            <div>
                <table className="container table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>Company Name</th>
                            <th>Total Hours</th>
                            <th>Hourly Rate</th>
                            <th>Fixed Rate</th>
                            <th>Invoice Number</th>
                            <th>PO Number</th>
                            <th>Invoice Date</th>
                            <th>PO Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>                                                            
                        {invoicelist && invoicelist.map((invoice,key)=>(
                        <tr key={key}  ref={ref}>
                            <td >{invoice.id}</td>
                            <td>{invoice.companyname}</td>
                            <td>{invoice.totalhours}</td>
                            <td>{invoice.hourlyrate}</td>
                            <td>{invoice.fixedrate}</td>
                            <td>{invoice.invoicenumber}</td>
                            <td>{invoice.ponumber}</td>
                            <td>{invoice.invoicedate}</td>
                            <td>{invoice.podate}</td>
                            <td>
                            <Pdf targetRef={ref} filename="emp.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </Pdf>
                                                            
                              <i onClick={()=>{setOpenModal(true);setdeleteid(invoice._id);setdeletename(invoice.firstname)}} className='btn bi bi-trash'></i>
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

export default withRouter(Invoicelist);
