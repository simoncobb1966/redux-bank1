import { combineReducers} from "redux";
import accountReducer from './accountReducer';
import customerReducer from './customerReducer';
const reducers= combineReducers({
    account: accountReducer,
    customer: customerReducer
});
export default reducers