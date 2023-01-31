import React from "react";
import { IPokemonDetail } from "../../util/Interface/IPokemon";


import './DisplayPokemonDetail.scss';

interface Props {
  pokemonDetail: IPokemonDetail
  setPokemonDetail: React.Dispatch<React.SetStateAction<IPokemonDetail>>
}

export default function DisplayPokemonDetail(props: Props) {
  let { pokemonDetail } = props
  let { id, name, sprites, weight, abilities } = pokemonDetail

  return <div className="pokeDetail">
    <div className="pokeItem">
      <div className="poke__name">
        <p>{name}</p>
      </div>
      <div className="poke__img" style={{ backgroundImage: `url(${sprites.front_default})` }}>
        <div className="pokeId">#{
          Number(id) < 100 ? `${('00' + id).slice(-3)}` : id}
        </div>
        <div className="pokeWeight">Weight: {weight}</div>
      </div>
      <div className="poke__description">
        <div className="poke__description--abilities">
          {abilities?.map((ab) => {
            return <div key={ab.ability.name}>
              <p className="name">{ab.ability.name}</p>
              <p className="des">{ab.ability.description}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>;
}
