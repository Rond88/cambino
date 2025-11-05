import { Component, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon, PokemonResult } from '../../model/pokemon';
@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class PokemonComponent {
  pokemons: PokemonResult[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((pokemon: Pokemon) => {
      this.pokemons = pokemon.results;
    });
  }
}
