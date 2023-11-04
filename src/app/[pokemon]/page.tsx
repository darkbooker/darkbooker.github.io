import { Box } from "@radix-ui/themes";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import Pokemons from "@/components/Pokemons";

interface Params {
  params: { pokemon: string };
}

const PokemonPage = async ({ params: { pokemon } }: Params) => {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const { data: pokemonData } = await supabase
    .from("pokemons")
    .select("id,name,setname,ability,move1,move2,move3,move4,nature,EVs,item,naturedescription,movesdescription,image")
    .eq("name", pokemon.toLowerCase());
  return (
    <Box className=''>
      <Pokemons pokemons={pokemonData} />
    </Box>
  );
};
export default PokemonPage;
