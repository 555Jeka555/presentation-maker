import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { rootReducer } from "./store.ts";
import * as slideActionCreators from "./actions/actionCreators.ts";
import { Action } from "./actions/actions.ts";

type RootState = ReturnType<typeof rootReducer>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => bindActionCreators({ ...slideActionCreators }, useDispatch<Dispatch<Action>>());

export { useAppActions, useAppSelector };
