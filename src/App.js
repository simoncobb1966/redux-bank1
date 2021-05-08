import React, { useState } from 'react';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index.js";
function App() {

  const [name, setName]=useState("");
  const account = useSelector((state) => state.account);
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const { removeCustomer, newCustomer, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

const handleName=(e)=>{
  setName(e.target.value)
}

  const addCustomer=()=>{
    newCustomer({name:name, id:Math.floor(Math.random() * 100)})
  };

  const deleteCustomer=(customer)=>{
    removeCustomer(customer)
  };

  return (
    <div className="App">
      <h1>Account {account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
    {customers.map((customer, index)=>{
      return (<h3 key={index}>{customer.name} {customer.id}<button onClick={()=>{deleteCustomer(customer)}}>Remove Customer</button></h3>)
    })}
   <label>Name</label>
   <input
   type="text"
   value={name}
   onChange={(e)=>{handleName(e)}}
   />
    <button onClick={()=>{addCustomer()}}>Add Customer</button>
    </div>
  );
}
export default App;
