import { Box, Flex, VStack } from "@chakra-ui/react"
import {Footer} from "./Footer"
import {Header} from "./Header"


export const Layout = ({children}:any ) => {
        return(
            <>
            <VStack spacing={8} align="stretch">
            <Box bg='#1b1b1b'>
                <Header/>
                <Flex justify={'center'} margin={0} padding={0} minHeight='100vh'>
                    {children}
                </Flex>
                <Footer />
            </Box>
            </VStack>
            </>
        )
}

