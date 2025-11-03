import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../model/usuarioInterface';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class UsuarioComponent {

  usuarios: Usuario[] = [];
  constructor(private oUsuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.oUsuarioService.getAllUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  verDatosUsuario(usuario: Usuario) {
    console.log('Datos del usuario:', usuario);
  }
}
