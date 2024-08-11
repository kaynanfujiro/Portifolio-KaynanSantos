import { Box, Flex, Spacer, Text } from "@chakra-ui/react"

import logoHtml from "../Images/Logo-Html.svg"
import logoCss from "../Images/Logo-Css.svg"
import logoTypeScript from "../Images/Logo-Typescript.svg"
import logoReact from "../Images/Logo-React.svg"
import logoNode from "../Images/Logo-Node.svg"
import TechCards from "../components/Techs/TechsCards"

export const Tech = () =>{
    return(
        <>
        <Flex justify='center' margin='100px'>
            <Flex justify='center' flexDirection='column' align='center'>
                <Text fontSize='2xl' color='#FEFDFB'>Minhas Principais Competências Tecnológicas.</Text>
                <Text fontSize='1xl' color="grey" textAlign='center' w='450px'>Possuo experiência prática com HTML5, CSS3, TypeScript, React, e Node.js, o que me permite desenvolver aplicações completas e integradas, 
                    desde o front-end até o back-end. Estou sempre em busca de aprender novas técnicas e aprimorar minhas habilidades, 
                    com o objetivo de entregar produtos de alta qualidade.</Text>
            </Flex>
            <Spacer/>
            <Flex justify='center' align='center' flexDirection='column'>
                <Flex>
                    <TechCards src={logoHtml} alt={'Logo Html'}/>
                    <TechCards src={logoCss} alt={'Logo Css'}/>
                </Flex>
                <Flex>
                    <TechCards src={logoTypeScript} alt={'Logo TypeScript'}/>
                    <TechCards src={logoReact} alt={'Logo React'}/>
                    <TechCards src={logoNode} alt={'Logo Node'}/>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}