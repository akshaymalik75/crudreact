import { useState } from "react";
import Employees from "./Employees";
import SalaryFilterUI from "./SalaryFilterUI";

const SalaryFilter = ({empdata}) => {

const [salaryLowData , setSalaryLowData] = useState([])
const [salaryHighData , setSalaryHighLowData] = useState([])
const [toggleLowSalaryView,setToggleLowSalaryView]=useState(false)
const [toggleHighSalaryView,setToggleHighSalaryView]=useState(false)

const lowestSalary=()=>
{
        
let sal;
for(let i=0;i<empdata.length;i++)
{
    if(i==0)
    {
        sal=empdata[i].salary
    }
    if(empdata[i].salary < sal)
    sal=empdata[i].salary
    
}
 
console.log(sal)
const filterLowSalary= empdata.filter(data=>
    {
      return data.salary === sal
    })

  if(filterLowSalary.length>0)
  {
   setSalaryLowData(filterLowSalary)
  
  }
  setToggleLowSalaryView(true)
  setToggleHighSalaryView(false)

}

const highestSalary=()=>
{
          
let sal = 0;
for(let i=0;i<empdata.length;i++)
{
    if(empdata[i].salary > sal)
    sal=empdata[i].salary
    
}
 
console.log(sal)
const filterHighSalary= empdata.filter(data=>
    {
      return data.salary === sal
    })

   
  if(filterHighSalary.length>0)
  {
   setSalaryHighLowData(filterHighSalary)

  
  }
  setToggleHighSalaryView(true)
  setToggleLowSalaryView(false)
  
}


    return ( 
        <div>
        <div className="salary-filter">
            <button className="update-btn sal-btn" onClick={lowestSalary}>Check Lowest Salary</button>
            <button className="update-btn " onClick={highestSalary}>Check Highest Salary</button>
            

        </div>
       {(salaryLowData.length>0 && toggleLowSalaryView)&& <SalaryFilterUI data={salaryLowData} title="Lowest Salary Records"/>}
       {(salaryHighData.length>0 && toggleHighSalaryView)&&<SalaryFilterUI data={salaryHighData} title="Highest Salary Records"/>}
        </div>
     );
}
 
export default SalaryFilter;