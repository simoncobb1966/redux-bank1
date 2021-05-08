export const depositMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "deposit",
        payload: amount,
      });
    };
  };
  export const withdrawMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "withdraw",
        payload: amount,
      });
    };
  };
  export const newCustomer = (customer) => {
    return (dispatch) => {
      dispatch({
        type: "newCustomer",
        payload: customer,
      });
    };
  };
  export const removeCustomer = (customer) => {
    return (dispatch) => {
      dispatch({
        type: "removeCustomer",
        payload: customer,
      });
    };
  };