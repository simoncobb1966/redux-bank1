const reducer = (state = [{name:"Simon", id:0}], action) => {

    let newArray=[]

    switch (action.type) {
      case "newCustomer":
          newArray = state.slice();
          newArray.push(action.payload);
          return newArray
      case "removeCustomer":
         newArray=state.filter((customer)=>{
            if (customer.id!==action.payload.id) return action.payload;
            return null
        })
        return newArray
        default:
            return state
    }
  };
  export default reducer;