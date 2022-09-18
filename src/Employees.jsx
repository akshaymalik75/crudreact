import TableData from "./TableData";

const Employees = ({ userdata, deleteData }) => {

    return (
        <div className="table-container">

            <h1 style={{
                textAlign: 'center',
                marginBlock : '20px',
                color : 'rgb(0, 64, 128)'
            }}>Employee Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData data={userdata} deleteData={deleteData} />
                </tbody>
            </table>

            <br />


        </div>
    );
}

export default Employees;