import { Box, Text, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import{AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'} >

        <Stack direction={['column','row']}>

    <VStack>

    <Heading size="md" textTransform={'uppercase'} >
        Subscribe to get updates
    </Heading>
    </VStack>
    <HStack borderBottom={'2px solid white'} py="2">
        <Input placeholder="Enter Gmail Here....."
        border={'none'} 
        borderRadius="none"
        outline={'none'}
        focusBorderColor="none"
        />
        <Button
        p={"0"}
        colorScheme='yellow'
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}
        >
            <AiOutlineSend size={20}/>
        </Button>
    </HStack>

    <VStack
    w={'full'}
    >
    </VStack>

    <Heading 
    textTransform={'uppercase'}
    textAlign={'center'}
    borderRight={['none','1px solid white']}
     >
        VIDEO HUB
    </Heading> 

    <Text>All rights recieved</Text>

     </Stack>

    </Box>
  )
}

export default Footer
