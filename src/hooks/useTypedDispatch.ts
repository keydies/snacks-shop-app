import { useDispatch } from 'react-redux';

import { AnyAction, Dispatch, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit';
import { AppDispatch } from 'store';

export const useTypedDispatch = (): ThunkDispatch<EmptyObject, undefined, AnyAction> & Dispatch<AnyAction> =>
  useDispatch<AppDispatch>();
