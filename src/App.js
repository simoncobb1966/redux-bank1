import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index.js";
function App() {
  const account = useSelector((state) => state.account);
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const { removeCustomer, newCustomer, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const addCustomer=()=>{
    newCustomer({name:"ian", id:1})
  };

  const deleteCustomer=()=>{
    removeCustomer({name:"ian", id:1})
  };

  return (
    <div className="App">
      <h1>Account {account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
    {customers.map((customer, index)=>{
      return (<h3 key={index}>{customer.name} {customer.id}</h3>)
    })}
   
    <button onClick={()=>{addCustomer()}}>Add Customer</button>
    <button onClick={()=>{deleteCustomer()}}>Remove Customer</button>
    </div>
  );
}
export default App;
