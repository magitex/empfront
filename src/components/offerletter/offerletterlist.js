import React,{useState,useEffect }  from 'react';
import Helper from '../helpers/networks';
import { withRouter } from 'react-router-dom';
import Offer from '../offerletter/offerletter';
import axios from 'axios';
import Modal from 'react-modal';
//import Pdf from "react-to-pdf";


Modal.setAppElement('#root')

function Offerletterlistlist(props) {
    const [openModal,setOpenModal] = useState(false)
    const[offerlist,setinvoice] = useState([])
    const ref = React.createRef();
 
    const [deleteid,setdeleteid] = useState();
    const [deletename,setdeletename] = useState();

    async function offerletterList() {       
        let data;          
        data= await Helper.offerletterData();
        const tempeminvoice =data && data.data; 
        setinvoice(tempeminvoice); 
        console.log(data);
    }
    
    useEffect(()=>{ 
       offerletterList();
    },[])
    
    function onDelete(id){
        console.log(id)
        
            axios.delete(process.env.REACT_APP_BASE_URL+'offerletter/'+id) 
            .then(res=>{
                    console.log(res.data)   
                    offerletterList();         
                });
            
    };

   
    return (
        <div>
        <Offer />
            <div>
                <table className="container table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>Employee Name</th>
                            <th>Joining Date</th>
                            <th>Salary</th>
                             <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>                                                            
                        {offerlist && offerlist.map((offer,key)=>(
                        <tr key={key}  ref={ref}>
                            <td >{offer.id}</td>
                            <td>{offer.employname}</td>
                            <td>{offer.joiningDate}</td>
                            <td>{offer.salary}</td>
                            <td>
                           
             <a href={offer.offerletterurl} target="_blank" rel="noreferrer">Invoice Link</a>
      
                                                            
                              <i onClick={()=>{setOpenModal(true);setdeleteid(offer._id);setdeletename(offer.firstname)}} className='btn bi bi-trash'></i>
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

export default withRouter(Offerletterlistlist);
