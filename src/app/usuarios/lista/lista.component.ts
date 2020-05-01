import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

}
