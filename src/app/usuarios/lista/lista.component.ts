import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe(({users}) => {
      this.usuarios = users;
    });

    this.store.dispatch(cargarUsuarios());
    /* this.usuarioService.getUsers().subscribe(users => {
      console.log(users);
      this.usuarios = users;
    }); */
  }

}
