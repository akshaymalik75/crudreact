import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AddData from "./AddUserData";
import Employees from "./Employees";
import Navbar from "./Navbar";
import SalaryFilter from "./SalaryFilter";


const App = () => {

const [userData , setUserData] = useState([])
const [addToggle , setAddToggle] = useState(false)
const [searchTag,setSearchTag] = useState(false)
const [isLoading , setIsLoading] = useState(true)

const [searchDataSet,setSearchDataSet]=useState([])



useEffect(()=>
{

  axios.get(`https://6325ae6b4cd1a2834c42814e.mockapi.io/empdata`)
            .then((response) => {
              
                setUserData(response.data);
                setIsLoading(false)
             
            }).catch(err=>
              {
                console.log(err)
                
              })

            


},[])

const handleClick =()=>
{
  setAddToggle(!addToggle)
}
const handleDelete=(id)=>
    {
        axios.delete(`https://6325ae6b4cd1a2834c42814e.mockapi.io/empdata/${id}`).
        then(()=>
        {
          getData();
        })
         
    }

    const getData=async()=>
    {
      await axios.get(`https://6325ae6b4cd1a2834c42814e.mockapi.io/empdata`)
            .then((response) => {
                setUserData(response.data);
            })
    }

    const searchData=(text)=>
    {
      
      
     const filterDeptData= userData.filter(data=>
        {
          return data.department.toLowerCase() === text.toLowerCase()
        })

      if(filterDeptData.length>0)
      {
       setSearchDataSet(filterDeptData)
       setSearchTag(true)
      }
      
    }

  


  return ( 
    <div>
      
      <Navbar  searchdata={searchData}/>
      

      {userData.length>0 && <SalaryFilter empdata={userData}/>}
     <div className="section">
    {isLoading && <h1>Loading.....</h1>}
    {(!isLoading && userData.length<=0 )&& <h1>No data </h1>}




     {(!searchTag && (userData.length>0) )&&<Employees userdata = {userData} deleteData={handleDelete} /> }

    {searchTag && <Employees userdata = {searchDataSet} deleteData={handleDelete} />}

     {(!isLoading ) && <button className="update-btn toggle-btn"
     onClick={handleClick}>
      {addToggle ? "Close Add Tab" : "Add User"}
      </button>}
     {(addToggle ) && <AddData/> }
    
     </div>
    </div>
   );
}
 
export default App;