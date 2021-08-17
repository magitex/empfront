import React,{useState,useEffect }  from 'react';
import Helper from '../helpers/networks';
import { withRouter} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Projectlist(props) {
    const [openModal,setOpenModal] = useState(false)
    const[projectlist,setProject] = useState([])

    async function projectList() {       
        let data;          
        data= await Helper.projectData();
        const tempprojects =data && data.data;         
        setProject(tempprojects); 
    }
    
    useEffect(()=>{ 
        projectList();
    },[])
    
    function onDelete(id){
        console.log(id)
        
            axios.delete('http://localhost:4000/projects/'+id) 
            .then(res=>{
                    console.log(res.data)   
                    projectList();         
                });
            
    };

    function editproject(id){
      props.history.push(`/editprojects/${id}`);
    }
    
    return (
            <div>
                <table className="container table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Module</th>
                            <th>Estimated time</th>
                            <th>Status</th> 
                            <th>Actions</th>                           
                        </tr>
                    </thead>
                    <tbody>                                                            
                        {projectlist && projectlist.map((project,key)=>(
                        <tr key={key}>
                            <td >{project.index}</td>
                            <td>{project.name}</td>
                            <td>{project.module}</td>
                            <td>{project.estimatedtime}</td>
                            <td>{project.status}</td>                            
                            <td>
                              <button  onClick={()=>editproject(project._id)}  className='btn bi bi-pencil'></button>                               
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
                                    <h6>Are you sure you want to delete {project.firstname}</h6> 
                                    <button  type="button" className="btn btn-success mt-4" onClick={()=>{onDelete(project._id);setOpenModal(false)}}>Yes</button>    
                                    <button  type="button" className="btn btn-danger ms-2 mt-4" onClick={()=>setOpenModal(false)}>cancel</button>     
                                </Modal>
                            </td>
                        </tr>
                         ))}                                                                                                                                                                                
                    </tbody>
                </table>    
           </div>
    )
}

export default withRouter(Projectlist);
