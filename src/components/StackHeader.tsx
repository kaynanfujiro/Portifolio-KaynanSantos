import { Box, Flex, Text } from "@chakra-ui/react";

interface IStackHeader{
    content: string
}

const StackHeader = ({content}:IStackHeader) => {
    return(
        <Box textAlign='center' w='80px' h='40px' color='#7a878d' _hover={{color:'white'}}transition='color 0,4s'>
           <Text textDecoration="underline" textDecorationColor="green.500" textDecorationThickness="1px" textUnderlineOffset="5px"
            _hover={{textDecorationThickness:"2px", transform: "scale(1.1)"}}transition="text-decoration-thickness 0.4s, transform: 0.4s ease-in-out">{content}</Text>
        </Box>
    )
}

export default StackHeader;