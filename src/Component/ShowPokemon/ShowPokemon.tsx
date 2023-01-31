import React, { useEffect, useState } from "react";
import { IPokemon, IPokemonDetail } from "../../util/Interface/IPokemon";
import DisplayPokemonDetail from "../DisplayPokemonDetail/DisplayPokemonDetail";
import "./ShowPokemon.scss";

interface Props {
  listPokemons: IPokemon[];
}

export default function ShowPokemon(props: Props) {
  let { listPokemons } = props;

  let [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail>({
    isDisplay: false,
    name: '',
    id: 0,
    sprites: {
      front_default: '',
      front_shiny: ''
    },
    weight: 0
  });

  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleMouseDown(e)
    );

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, []);

  // Check is display or not
  const handleMouseDown = (e: MouseEvent) => {
    let target = e.target as HTMLElement;

    if (!target.closest(".pokeItem")) {
      setPokemonDetail({
        ...pokemonDetail,
        isDisplay: false,
      });
    }
  };

  // Update selected pokemon
  const handleShowPokemonDetail = (pokemon: IPokemon) => {
    setPokemonDetail({
      ...pokemonDetail,
      isDisplay: true,
      name: pokemon.name,
      id: pokemon.id,
      sprites: {
        front_shiny: pokemon.sprites.front_shiny,
        front_default: pokemon.sprites.front_default
      },
      weight: pokemon.weight,
      abilities: pokemon.abilities
    });
  };

  // Render pokemons 
  const renderPokemon = () => {
    return listPokemons.map((pokemon) => {
      return (
        <div key={pokemon.id} className="showPokemon__item" onClick={() => handleShowPokemonDetail(pokemon)}>
          <div className="showPokemon__item-default" style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}></div>
          <div className="showPokemon__item-shiny" style={{ backgroundImage: `url(${pokemon.sprites.front_shiny})` }}></div>
          <p className="showPokemon__item--name">{pokemon.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="showPokemon">
      <div className="showPokemonList">{renderPokemon()}</div>
      {pokemonDetail.isDisplay ?
        <DisplayPokemonDetail pokemonDetail={pokemonDetail} setPokemonDetail={setPokemonDetail} /> : ""}
    </div>
  );
}
