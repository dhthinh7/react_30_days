import { BaseServices } from "./BaseServices";

class PokemonServices extends BaseServices {
  getListPokemonLimit = (limit: number, type: string = 'pokemon') => this.get(`?limit=${limit}&offset=0`, type);
  getPokemonDetail = (name: string, type: string = 'pokemon') => this.get(name, type)
  getAbilities = (id:string, type:string = 'ability') => this.get(id, type)
}

export const pokemonServices = new PokemonServices();
