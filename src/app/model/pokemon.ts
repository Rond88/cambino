export interface Pokemon {
  count: number
  next: string
  previous: any
  results: PokemonResult[]
}

export interface PokemonResult {
  name: string
  url: string
}
