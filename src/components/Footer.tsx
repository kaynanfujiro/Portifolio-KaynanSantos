import { Flex, HStack, Icon, Text, Image, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { ReactComponent as IconGit } from "../Images/iconmonstr-github-1.svg";
import { ReactComponent as IconLinkdin } from "../Images/linkedin-app-white-icon.svg";
import { ReactComponent as IconMail } from "../Images/email-svgrepo-com.svg";
import animatedGif from "../Images/Programmer-svg.gif";
import { BtnCurriculo } from "./BtnCurriculo";

export const Footer = () => {
    return(
    <>
    <Flex padding={10} justify='center' align='center' fontFamily='Roboto' direction={['column','row']}>
        <Image src={animatedGif}/>
        <Flex justify='center' align='flex-start' direction='column'>
        <Text fontSize={["xl","2xl"]} color="#FFFF">Gostou? Entre em contato.</Text>
            <HStack spacing={5}>
                <Link to="https://github.com/kaynanfujiro/">
                    <Icon as={IconGit} boxSize='40px' transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
                </Link>
                <Link to="https://www.linkedin.com/in/kaynan-felipe">
                    <Icon as={IconLinkdin} boxSize='40px' transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
                </Link>
                <Link to="mailto: kaynanfelipe28@hotmail.com">
                    <Icon as={IconMail} boxSize='40px' transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
                </Link>
            </HStack>
                <BtnCurriculo/>
        </Flex>
    </Flex>
    </>
)
}

