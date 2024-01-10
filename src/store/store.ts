import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer.ts";

export const rootReducer = combineReducers({
  presentation: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
