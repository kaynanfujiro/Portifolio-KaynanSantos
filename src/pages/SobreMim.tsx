import {Box, Text, Image, Flex } from "@chakra-ui/react"
import BlinkingBorderImage from "../components/BorderProfile"

export const SobreMim = () => {


    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
            <Box padding={5}>
                <BlinkingBorderImage />
            </Box>
            <Text fontSize='2xl' color='#FEFDFB' id="typed-output" fontFamily='Roboto'>Olá! Eu sou Kaynan Santos, Desenvolvedor Web em início de carreira.</Text>
        </Flex>
    );
}
