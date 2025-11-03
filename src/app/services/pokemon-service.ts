import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100');
  }
}
