import { useState } from "react";

import axios from 'axios';



const AddData = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstName,salary,department}=empData
        axios.post(`https://6325ae6b4cd1a2834c42814e.mockapi.io/empdata`, 
          {
            firstName,
            salary,
            department
          }
        )
        setUserAdded(true)
    }

    const [empData, setEmpData] = useState({
        firstName: '',
        salary: '',
        department: 'Backend'
    })
    const [userAdded,setUserAdded] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target

        setEmpData(prev => {
            return {
                ...prev,
                [name]: value

            }
        })

        
    }

    return (

        <div className="create">
            <h2>Add a new Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Firstname:</label>
                <input
                    type="text"
                    required
                    placeholder="Enter Employee Name"
                    value={empData.firstName}
                    name="firstName"
                    onChange={handleChange}
                />

                <label>Salary :</label>
                <input
                    type="number"
                    min="0"
                    required
                    placeholder="Enter Salary"
                    value={empData.salary}
                    name="salary"
                    onChange={handleChange}
                />


                <label>Department :</label>
                <select
                    name="department"
                    required
                    value={empData.department}
                    onChange={handleChange}>
                    <option value="Frontend">FrontEnd</option>
                    <option value="Backend">BackEnd</option>

                </select>

              <button className="create-btn">Add Employee</button>
              <a style={{marginLeft : '20px'}} href="/" className="create-btn">Home</a>


            </form>

            {userAdded && <h3 className="status">Employee data added successfully</h3>}
        </div>

    );
}

export default AddData;