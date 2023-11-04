"use client";
import { Box, Text, Card, Flex, Heading, Grid, HoverCard, AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
type Pokemon = {
  id: string;
  name: string;
  setname: string
  ability: string;
  nature: string;
  naturedescription: string;
  movesdescription: string;
  move1: string[];
  move2: string[];
  move3: string[];
  move4: string[];
  EVs: string;
  item: string[];
  image: string;
};

interface Props {
  pokemons: Pokemon[] | null;
}

const Items = ({ pokemons }: Props) => {
  return (
    <Grid gap='5' columns='1'>
      {pokemons?.map((pokemon) => (
        <Box key={pokemon.id} className='my-2'>
          <Flex className='pb-2'>
            <Heading size='6' weight='bold' className='py-1'>
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}{" "}
            </Heading>
          </Flex>
          <Grid gap='5' columns='1'>
      {pokemons?.map((pokemon) => (
        <Box key={pokemon.id} className='my-2'>
          <Flex className='pb-2'>
            <Heading size='6' weight='bold' className='py-1'>
              {<pokemon className="setname"></pokemon>[0].toUpperCase() + <pokemon className="setname"></pokemon>.slice(1)}{" "}
            </Heading>
          </Flex>

          <Card variant='surface' className='px-3 pt-2'>
            <Box className='sm:flex block items-center gap-6'>
              <Box className='sm:pb-0 pb-2 '>
                <Image
                  alt={`image of ${pokemon.name}`}
                  src={`https://bzgzlhdowumbsdyxqlso.supabase.co/storage/v1/object/public/pokemonimages/${pokemon.image}`}
                  width={64}
                  height={64}
                  className='rounded'
                />
              </Box>
              <Grid columns={{ initial: "1", md: "2" }} className='grid w-full'>
                <Box>
                </Flex>
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Flex>
                      <div className='w-16'>Ability:</div>
                      <Text className='text-[#9E9EFF] pl-3'>
                        {pokemon.ability[0].toUpperCase() + pokemon.ability.slice(1)}
                      </Text>
                    </Flex>
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Flex>
                  <Text as='div' color='gray' size='3'>
                    <Text className='pr-5'>Move 1:</Text>
                    {pokemon?.move1?.map((move) => (
                      <Text key={move}>
                        <Text className='text-[#9E9EFF]'>{move[0].toUpperCase() + move.slice(1)}</Text>{" "}
                        {move != pokemon?.move1?.[pokemon?.move1?.length - 1] && pokemon?.move1?.length > 1
                          ? " / "
                          : ""}
                      </Text>
                    ))}
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Text className='pr-5'>Move 2:</Text>
                    {pokemon?.move2?.map((move) => (
                      <Text key={move}>
                        <Text className='text-[#9E9EFF]'>{move[0].toUpperCase() + move.slice(1)}</Text>
                        {move != pokemon?.move2?.[pokemon?.move2?.length - 1] && pokemon?.move2?.length > 1
                          ? " / "
                          : ""}
                      </Text>
                    ))}
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Text className='pr-5'>Move 3:</Text>
                    {pokemon?.move3?.map((move) => (
                      <Text key={move}>
                        <Text className='text-[#9E9EFF]'>{move[0].toUpperCase() + move.slice(1)}</Text>
                        {move != pokemon?.move3?.[pokemon?.move3?.length - 1] && pokemon?.move3?.length > 1
                          ? " / "
                          : ""}
                      </Text>
                    ))}
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Text className='pr-5'>Move 4:</Text>
                    {pokemon?.move4?.map((move) => (
                      <Text key={move}>
                        <Text className='text-[#9E9EFF]'>{move[0].toUpperCase() + move.slice(1)}</Text>
                        {move != pokemon?.move4?.[pokemon?.move4?.length - 1] && pokemon?.move4?.length > 1
                          ? " / "
                          : ""}
                      </Text>
                    ))}
                  </Text>
                </Box>
                <Box>
                  <Text as='div' color='gray' size='3'>
                    <Flex>
                      <div className='w-16'>Item:</div>
                      {pokemon?.item?.map((item) => (
                        <Text key={item} className='pl-3'>
                          <Text className='text-[#9E9EFF]'>{item[0].toUpperCase() + item.slice(1)}</Text>
                          {item != pokemon?.item?.[pokemon?.item?.length - 1] && pokemon?.item?.length > 1 ? " /" : ""}
                        </Text>
                      ))}
                    </Flex>
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Flex>
                      <div className='w-16'>Ability:</div>
                      <Text className='text-[#9E9EFF] pl-3'>
                        {pokemon.ability[0].toUpperCase() + pokemon.ability.slice(1)}
                      </Text>
                    </Flex>
                  </Text>
                  <Text as='div' color='gray' size='3'>
                    <Flex>
                      <div className='w-16'>Nature:</div>

                      <HoverCard.Root>
                        <HoverCard.Trigger>
                          <Text className='pl-3 underline decoration-dotted underline-offset-2'>
                            {pokemon.nature[0].toUpperCase() + pokemon.nature.slice(1)}
                          </Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                          <Flex gap='2'>
                            <Box>
                              <Heading size='3' as='h3'>
                                {pokemon.nature[0].toUpperCase() + pokemon.nature.slice(1)}
                              </Heading>
                              <Text as='div' size='2' style={{ maxWidth: 300 }} mt='1'>
                                {pokemon.naturedescription}
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
                      <div className='pl-3'>{pokemon.EVs}</div>
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
                {pokemon.movesdescription}
              </Text>
            </Box>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};
export default Items;