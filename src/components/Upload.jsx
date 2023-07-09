import { Container, Input,HStack, VStack, Button} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai';

const Upload = () => {
  return (
  <Container maxW={"container.xl"} h={'100vh'} p={"16"}>
     <VStack color={'yellow.400'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>

        <form >
            <HStack>
                <Input required type={'file'} css={{
                    "&::file-selector-button":{
                        border:"none",
                        width:"calc(100% + 36px)",
                        height:"100%",
                        marginLeft:"-18px",
                        color:'yellow',
                        background:'black',
                        cursor:'pointer',
                    },
                }} />
                <Button colorScheme={'yellow'} type={'submit'}>
                    Upload
                </Button>
            </HStack>
        </form>

     </VStack>

  </Container>
  );
};

export default Upload