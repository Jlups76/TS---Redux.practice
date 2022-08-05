import { combineReducers } from "redux";
import repsitoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repsitoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
/** now have a type that describes the type of information in our store */
