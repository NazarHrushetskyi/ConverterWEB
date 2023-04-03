import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import convertReducer from "./convertReducer";
import historicalReducer from "./historicalReducer";
import comparisonReducer from "./comparisonReducer";
import chartsReducer from "./chartsReducer";

const rootReducer = combineReducers({
  convertReducer,
  historicalReducer,
  comparisonReducer,
  chartsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
