import ReactDOM from 'react-dom';
import App from './App';
import React,{ Component,useState } from 'react';
function NewEmployee(){
    const [emp,setEmp]=useState({id:"",
    name:"",
    salary:""});
    

const valueChangeHandler=(e)=>{
    setEmp({...emp,[e.target.name]:e.target.value})

}

return(<div>
<h1> welcome to new emp</h1>
<label>Employee Id
    <input type="text" name="id" value={emp.id} onChange={valueChangeHandler}></input></label>
    <label>Employee Name
    <input type="text" name="name" value={emp.name} onChange={valueChangeHandler}></input></label>
    <label>Employee Salary
    <input type="text" name="salary" value={emp.salary} onChange={valueChangeHandler}></input></label>
    <p>

Employee ID is : <b>{emp.id}</b>, Name is : <b>{emp.name}</b> ,

 Salary is : <b>{emp.salary}</b>

</p>
    <SalaryComp onSalaryChange={valueChangeHandler} salaryemp={emp.salary} />
    </div>
)
}




const SalaryComp=({onSalaryChange,salaryemp})=>{

    const salaryChangeHandler=(e)=>{
       // console.log(e);
        onSalaryChange(e);
    }

    return(<div>
        <h1> welcome to salary comp</h1>
<label>Employee salary
    <input type="text" name="salary" value={salaryemp} onChange={salaryChangeHandler}></input></label>
    </div>)
}
const element=<NewEmployee></NewEmployee>
//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'));
