import { AnyAction, combineReducers, configureStore, EmptyObject, ThunkMiddleware } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const rootReducer = combineReducers({});

export const setupStore = (): ToolkitStore<
  EmptyObject,
  AnyAction,
  [ThunkMiddleware<EmptyObject, AnyAction, undefined>]
> => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
