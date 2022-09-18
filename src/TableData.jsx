import { useState } from "react"
import UpdateData from "./UpdateData"
import axios from "axios"

const TableData = ({data,deleteData}) => {

    const [updateModal , setUpdateModal] =useState(false)

    const handleDelete=(data)=>
    {
        deleteData(data.id)
    }
    

    const handleUpdate=(data)=>
    {
        const {id,firstName,department ,salary} = data
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Department', department);
        localStorage.setItem('Salary', salary)
        setUpdateModal(true)
    }
    const closeUpdateTag=()=>
    {
        setUpdateModal(false)
    }
    
    return ( 
        <>

        {data.map(data=>
            (
               <tr key={data.id}>
                <td>{data.firstName}</td>
                <td>{data.department}</td>
                <td>{data.salary}</td>
                <td><button className="update-btn" onClick={()=>
                {   
                    handleUpdate(data)
                }}>Update</button></td>
                <td><button className="delete-btn" onClick={()=>
                {
                    handleDelete(data)
                }}>Delete</button></td>
               </tr>  
            ))}
        {updateModal && <UpdateData setmodal={closeUpdateTag}/>}
        </>
     );
}
 
export default TableData;