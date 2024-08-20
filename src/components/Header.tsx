import { Image, Flex, HStack, Spacer, Text } from "@chakra-ui/react"
import StackHeader from "./StackHeader"
import { Link } from "react-router-dom"
import ProFile from "../Images/ProFile.png"


export const Header = () => {

    return (
        <Flex padding={10} justify='center' align='center' h='10vh' fontFamily='Roboto'>
            <Link to="/">
                <Image w='150px' h='150px' src={ProFile} />
            </Link>
            <Spacer />
            <HStack spacing='24px'>
                <a href="#tech-section">
                    <StackHeader content='Tech' />
                </a>
                <a href="#projetos-section">
                    <StackHeader content='Projetos' />
                </a>
            </HStack>
        </Flex>
    );
};