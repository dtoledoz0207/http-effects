import {createReducer, on} from '@ngrx/store';
import {cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError} from '../actions';

export interface UsuariosState {
  users: [];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _conterReducer = createReducer(usuariosInitialState,
  on(cargarUsuarios, state => ({...state, loading: true })),
  on(cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),
  on(cargarUsuariosError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
);


export function counterReducer(state, action) {
  return _conterReducer(state, action);
}
