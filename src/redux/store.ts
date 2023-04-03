import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk<ReturnType = void | Promise<any>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export default store;
