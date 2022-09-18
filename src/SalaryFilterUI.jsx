const SalaryFilterUI = ({data,title}) => {
    return ( 
        <div className="table-container">

        <h1 style={{
            textAlign: 'center',
            marginBlock : '20px',
            color : 'rgb(0, 64, 128)'
        }}>{title}</h1>
        <table>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
            <>

{data.map(data=>
    (
       <tr key={data.id}>
        <td>{data.firstName}</td>
        <td>{data.department}</td>
        <td>{data.salary}</td>
        
       </tr>  
    ))}

</>
            </tbody>
        </table>

        <br />


    </div>
     );
}
 
export default SalaryFilterUI;