import { useDispatch } from 'react-redux';

import { Dispatch } from '@reduxjs/toolkit';
import { AppDispatch } from 'store';

export const useTypedDispatch = (): Dispatch => useDispatch<AppDispatch>();
