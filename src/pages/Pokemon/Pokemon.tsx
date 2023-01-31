import React, { useEffect, useState } from "react";
import ShowPokemon from "../../Component/ShowPokemon/ShowPokemon";
import { pokemonServices } from "../../Services/PokemonService";
import { IPokemon } from "../../util/Interface/IPokemon";
import './Pokemon.scss';

interface IPokemons {
  name: string
  url: string
}

export default function Pokemon() {
  let [listPokemons, setListPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    const getPokemons = async () => {
      let listPokemon = await pokemonServices.getListPokemonLimit(20)
      // Get detail for each pokemon
      listPokemon.data.results.forEach(async (pokemon: IPokemons) => {
        let pokemonDetail = await pokemonServices.getPokemonDetail(pokemon.name)
        let newSelect = { ...pokemonDetail.data }

        // Get abilities of pokemon
        newSelect.abilities.map(async(abi: { ability: { name: string, url: string, description: string } }) => {
          let id:string = abi.ability.url.split('/')[abi.ability.url.split('/').length - 2]
          let ability = await pokemonServices.getAbilities(id)
          return abi.ability.description = ability.data.effect_entries.find((item:any) => item.language.name === 'en').effect
        })

        setListPokemons((prev) => [...prev, { ...newSelect }])
      })
    }

    getPokemons()
  }, [])

  return <div className="pokemon container">
    <header>Pokemons</header>
    <ShowPokemon listPokemons={listPokemons} />
  </div>;
}
