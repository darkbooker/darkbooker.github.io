import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Box, Text } from "@radix-ui/themes";
import Pokemons from "@/components/Pokemons";

interface Props {
  searchParams: {
    q?: string;
  };
}

const Page = async ({ searchParams: { q } }: Props) => {
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
  const { data: pokemons } = await supabase
    .from("pokemons")
    .select(
      "id,name,ability,move1,move2,move3,move4,nature,EVs,item, naturedescription, movesdescription,image,setname, setcount"
    )
    .ilike("name", `%${q}%`);

  return (
    <Box className=''>
      <Text as='div' className='pb-5'>
        Search results for &quot;{q}&quot;
      </Text>
      <Pokemons pokemons={pokemons} />
    </Box>
  );
};
export default Page;
