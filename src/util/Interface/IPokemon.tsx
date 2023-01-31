export interface IPokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  }
  weight: number
  abilities?: {
    ability: {
      name: string
      url: string
      description: string
    }
  }[]
}

export interface IPokemonDetail extends IPokemon {
  isDisplay: boolean
  
}