import { Image, Flex, HStack, Spacer, Text } from "@chakra-ui/react"
import StackHeader from "./StackHeader"
import { Link } from "react-router-dom"
import ProFile from "../Images/ProFile.png"

export const Header = () => {
    return(
        <>
        <Flex padding={10} justify='center' align='center' h='10vh'>
            <Link to="/">
                <Image w='120px' h='120px' src={ProFile}/>
            </Link>
            <Spacer />
            <HStack spacing='24px'>
                <Link to="/tech">
                    <StackHeader content='Tech'/>
                </Link>
                <Link to="/Projetos">
                    <StackHeader content='Projetos'/>
                </Link>
                <Link to="/Redes">
                    <StackHeader content='Redes'/>
                </Link>
            </HStack>
        </Flex>
        </>
    )
}
