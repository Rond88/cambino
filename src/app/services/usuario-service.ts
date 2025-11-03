import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private oHttpClient: HttpClient) {

   }

   getAllUsuarios():Observable<Usuario[]> {
     return this.oHttpClient.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
   }
}
