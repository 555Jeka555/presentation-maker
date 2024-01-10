import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as SlideActionCreators from "../store/actions/actionCreators.ts";
import { RootState } from "../store/store.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSlideActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(SlideActionCreators, dispatch);
};
