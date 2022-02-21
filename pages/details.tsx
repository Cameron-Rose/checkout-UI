import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from '@chakra-ui/react'

function details() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in</Text>
        </VStack>
        <SimpleGrid column={2} columnGap={3} rowGap={6} w='full'>

        </SimpleGrid>
    </VStack>
  )
}

export default details