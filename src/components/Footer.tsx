import { Flex, HStack, Icon, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { ReactComponent as IconGit } from "../Images/iconmonstr-github-1.svg";
import { ReactComponent as IconLinkdin } from "../Images/linkedin-app-white-icon.svg";
import { ReactComponent as IconMail } from "../Images/email-svgrepo-com.svg";

export const Footer = () => {
    return(
    <>
    <Flex padding={10} justify='center' align='center' h='10vh'>
        <HStack spacing={5}>
            <Text color="#FFFF">Contatos</Text>
            <Link to="https://github.com/kaynanfujiro/">
                <Icon as={IconGit} boxSize={8} transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/kaynan-felipe">
                <Icon as={IconLinkdin} boxSize={8} transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
            </Link>
            <Link to="mailto: kaynanfelipe28@hotmail.com">
                <Icon as={IconMail} boxSize={8} transition="transform: 0.2s ease-in-out" _hover={{transform: "scale(1.2)"}}/>
            </Link>
        </HStack>
    </Flex>
    </>
)
}

