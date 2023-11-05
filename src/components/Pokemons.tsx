"use client";
import { Grid } from "@radix-ui/themes";
import PokemonComponent from "./PokemonComponent";
import { Pokemon } from "@/types/pokemon";

interface Props {
  pokemons: Pokemon[] | null;
}

const Items = ({ pokemons }: Props) => {
  return (
    <Grid gap='5' columns='1'>
      {pokemons?.map((pokemon) => (
        <PokemonComponent key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};
export default Items;
