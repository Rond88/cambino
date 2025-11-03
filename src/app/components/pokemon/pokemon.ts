import { Component, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon, Result } from '../../model/pokemon';
@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class PokemonComponent {
  pokemons = signal<Result[]>([]);
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((data: Pokemon) => {
      this.pokemons.set(data.results);
    });
  }
}
