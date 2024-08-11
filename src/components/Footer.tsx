import { Flex, HStack, Icon, Text, Image, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { ReactComponent as IconGit } from "../Images/iconmonstr-github-1.svg";
import { ReactComponent as IconLinkdin } from "../Images/linkedin-app-white-icon.svg";
import { ReactComponent as IconMail } from "../Images/email-svgrepo-com.svg";
import animatedGif from "../Images/Programmer-svg.gif";

export const Footer = () => {
    return(
    <>
    <Flex padding={10} justify='center' align='center' marginTop='250px'>
        <Image src={animatedGif}/>
        <Flex justify='center' align='flex-start' flexDirection='column'>
        <Text fontSize="2xl" color="#FFFF">Gostou? Entre em contato.</Text>
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
            <Button bg='#219ebc' borderRadius='10px' color='white' transition="transform: 0.2s ease-in-out" _hover={{ boxShadow: '0px 0px 20px 5px #219ebc'}}>Currículo</Button>
        </Flex>
    </Flex>
    </>
)
}

