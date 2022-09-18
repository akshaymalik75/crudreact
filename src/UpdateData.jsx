
import { useState, useEffect } from "react";

import axios from 'axios'; 
const UpdateData = ({setmodal}) => {


    const [id, setID] = useState(null);

    const [empData, setEmpData] = useState({
        firstName: '',
        salary: '',
        department: 'Backend'
    })
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        const FirstName = (localStorage.getItem('First Name'));
        const Department = (localStorage.getItem('Department'));
        const Salary = (localStorage.getItem('Salary'))

        setEmpData({
            firstName: FirstName,
            salary: Salary,
            department: Department
        })
        console.log(empData)
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, salary, department } = empData
        axios.put(`https://6325ae6b4cd1a2834c42814e.mockapi.io/empdata/${id}`,
            {
                firstName,
                salary,
                department
            }
        )

        console.log(empData)
        setUserAdded(true)
    }


    const [userAdded, setUserAdded] = useState(false)


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
        <aside className="modal-overlay">
            <div className="create">
                <h2>Update Employee Data</h2>
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

                    <button className="create-btn">Update</button>

                </form>

                {userAdded && <h3 className="status">Employee data Updated successfully</h3>}
                {<button className="delete-btn del" onClick={setmodal}>Close</button>}
            </div>
        </aside>
    );
}

export default UpdateData;