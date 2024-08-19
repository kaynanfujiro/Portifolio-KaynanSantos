import { Box, Flex, VStack } from "@chakra-ui/react"
import {Footer} from "./Footer"
import {Header} from "./Header"


export const Layout = ({children}:any ) => {
        return(
            <>
            <VStack spacing={8} align="stretch">
            <Box bg='#1b1b1b'>
                <Header/>
                <Box justifyContent={'center'} margin={0} padding={['20px','50px','100px',"150px"]} minHeight='100vh'>
                    {children}
                </Box>
                <Footer />
            </Box>
            </VStack>
            </>
        )
}

