"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Container, TextField, Button, Flex, Card, Text, Select } from "@radix-ui/themes";
import { useState, useEffect, useDeferredValue } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

type Pokemon = {
  id: string;
  name: string;
};

export default function SearchComponent() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const router = useRouter();
  const [search, setSearch] = useState("");
  const defferedSearch = useDeferredValue(search);
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [highlightedOption, setHighlightedOption] = useState(-1); // Added state for highlighting

  const handleChange = async (value: string) => {
    setSearch(value);
    setHighlightedOption(-1); // Reset highlighted option when search input changes
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      router.push(`/search?q=${search}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (pokemons && pokemons.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault(); // Prevent scrolling the page
          setHighlightedOption((prev) => (prev + 1) % pokemons.length);
          break;
        case 'ArrowUp':
          e.preventDefault(); // Prevent scrolling the page
          setHighlightedOption((prev) => (prev - 1 + pokemons.length) % pokemons.length);
          break;
        case 'Enter':
          if (highlightedOption !== -1) {
            router.push(`/${pokemons[highlightedOption].name.toLowerCase()}`);
            setSearch('');
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("pokemons").select("id,name").ilike("name", `%${defferedSearch}%`);
      setPokemons(data);
    }
    fetchData();
  }, [supabase, defferedSearch]);

  return (
    <Box className='mb-10'>
      <form onSubmit={handleSubmit} className='py-2'>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
          <TextField.Input
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Search...'
            value={search}
          />
          <Button type='submit' variant='solid'>
            Search
          </Button>
        </TextField.Root>
        {search && (
          <Box className='rounded-b-md rounded-bl-md relative w-full shadow-lg z-10'>
            <Box className='absolute bg-[#17191a] rounded-b-md rounded-bl-md py-1 w-full '>
              {pokemons
                ?.map((pokemon: Pokemon, index) => (
                  <Box
                    className={`py-1 px-8 ${index === highlightedOption ? 'hover:bg-slate-700 active:bg-slate-600 opacity-80 rounded-b-md rounded-bl-md' : ''}`}
                    key={pokemon.id}
                    onClick={() => {
                      router.push(`/${pokemon.name.toLowerCase()}`);
                      setSearch('');
                    }}
                  >
                    {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                  </Box>
                ))}
            </Box>
          </Box>
        )}
      </form>
    </Box>
  );
}
