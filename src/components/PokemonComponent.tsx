import { Box, Text, Card, Flex, Heading, Grid, HoverCard, AspectRatio } from "@radix-ui/themes";
import Image from "next/image";

import { Pokemon } from "@/types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonComponent = ({ pokemon }: Props) => {
  const variations = Array.from(Array(pokemon.setcount).keys());
  const moves = [pokemon.move1, pokemon.move2, pokemon.move3, pokemon.move4];

  return (
    <Box key={pokemon.id} className='my-2'>
      <div className='pb-2 text-center'>
            <Box className='sm:pb-0 pb-2 '>
              <Image
                alt={`image of ${pokemon.name}`}
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pokemonimages/${pokemon.image}`}
                width={128}
                height={128}
                className='rounded'
              />
            </Box>
        <Heading size='6' weight='bold' className='py-1'>
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}{" "}
        </Heading>
      </div>

      {variations.map((variation) => (
        <Card variant='surface' className='px-3 pt-2 mb-8' key={variation}>
          <div className='flex justify-center mb-3'>
            <Text size='7' weight='bold'>
              {pokemon.setname[variation]}
            </Text>
          </div>

          <div className='text-center'>
            <Text color='gray' size='2'>
              <i>- By</i> {pokemon.author[variation]}
            </Text>
          </div>

          <hr className='mb-5 w-5  ' />
          <Box className='sm:flex block items-center gap-6'>
            <Grid columns={{ initial: "1", md: "2" }} className='grid w-full'>
              <Box>
                {moves.map((move) => (
                  <Text as='div' color='gray' size='3' key={moves.indexOf(move)}>
                    <Text className='pr-5'>Move {moves.indexOf(move) + 1}:</Text>
                    <Text>
                      <Text className='text-rose-300'>{move[variation]}</Text>
                    </Text>
                  </Text>
                ))}
              </Box>
              <Box>
                <Text as='div' color='gray' size='3'>
                  <Flex>
                    <div className='w-16'>Item:</div>
                    <Text className='pl-3'>
                      <Text className='text-rose-300'>
                        {pokemon.item[variation][0].toUpperCase() + pokemon.item[variation].slice(1)}
                      </Text>
                    </Text>
                  </Flex>
                </Text>
                <Text as='div' color='gray' size='3'>
                  <Flex>
                    <div className='w-16'>Ability:</div>
                    <Text className='text-rose-300 pl-3'>
                      {pokemon.ability[variation][0].toUpperCase() + pokemon.ability[variation].slice(1)}
                    </Text>
                  </Flex>
                </Text>
                <Text as='div' color='gray' size='3'>
                  <Flex>
                    <div className='w-16'>Nature:</div>
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <Text className='pl-3 underline decoration-dotted underline-offset-2'>
                          {pokemon.nature[variation][0].toUpperCase() + pokemon.nature[variation].slice(1)}
                        </Text>
                      </HoverCard.Trigger>
                      <HoverCard.Content>
                        <Flex gap='2'>
                          <Box>
                            <Heading size='3' as='h3'>
                              {pokemon.nature[variation][0].toUpperCase() + pokemon.nature[variation].slice(1)}
                            </Heading>
                            <Text as='div' size='2' style={{ maxWidth: 300 }} mt='1'>
                              {pokemon.naturedescription[variation]}
                            </Text>
                          </Box>
                        </Flex>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  </Flex>
                </Text>
                <Text as='div' color='gray' size='3'>
                  <Flex>
                    <div className='w-16'>EVs:</div>
                    <div className='pl-3'>{pokemon.EVs[variation]}</div>
                  </Flex>
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box className='my-4'>
            <Heading className='py-2' size='5'>
              Description
            </Heading>
            <Text color='gray' size='3'>
              {pokemon.movesdescription[variation]}
            </Text>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default PokemonComponent;
