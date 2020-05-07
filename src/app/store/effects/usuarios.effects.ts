import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';


@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions, private usuarioService: UsuarioService){}

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(
        () => this.usuarioService.getUsers().pipe(
          map(users => usuariosActions.cargarUsuariosSuccess({usuarios: users}))
        )
      )
    )
  );
}
