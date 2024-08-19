import { Image, Flex, HStack, Spacer, Text } from "@chakra-ui/react"
import StackHeader from "./StackHeader"
import { Link } from "react-router-dom"
import ProFile from "../Images/ProFile.png"
import { useScrollRefs } from "./Scroll/ScrollRefSearch"

export const Header = () => {
    
    const {scrollToProjetos, scrollToTech } = useScrollRefs();

    return(
        <>
        <Flex padding={10} justify='center' align='center' h='10vh' fontFamily='Roboto'>
            <Link to="/">
                <Image w='150px' h='150px' src={ProFile}/>
            </Link>
            <Spacer />
            <HStack spacing='24px'>
                <Link to="/Tech" >
                    <StackHeader content='Tech' onClick={scrollToTech} />
                </Link>
                <Link to="/Projetos" >
                    <StackHeader content='Projetos' onClick={scrollToProjetos} />
                </Link>
            </HStack>
        </Flex>
        </>
    )
}
