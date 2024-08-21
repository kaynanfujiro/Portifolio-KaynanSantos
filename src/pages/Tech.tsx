import { Flex, Spacer, Text } from "@chakra-ui/react"

import logoHtml from "../Images/Logo-Html.svg"
import logoCss from "../Images/Logo-Css.svg"
import logoGithub from "../Images/Logo-Github.svg"
import logoTypeScript from "../Images/Logo-Typescript.svg"
import logoReact from "../Images/Logo-React.svg"
import logoNode from "../Images/Logo-Node.svg"
import TechCards from "../components/Techs/TechsCards"
import { TextAbout, TextFontAbout } from "../components/TextAbout"


export const Tech = () =>{


    return(
        <>
        <Flex id="tech-section" justify='center' marginTop='370px' fontFamily='Roboto' direction={['column','row']}>
            <Flex justify='center' flexDirection='column'>
                <Flex justify='center' flexDirection='column' align='center' margin={['5px','10px']} padding='10px'>
                    <TextFontAbout content="Sobre Mim"/>
                    <TextAbout content="Sou estudante de Engenharia da Computação, atualmente no 6º semestre, 
                        em busca de oportunidades de estágio na área de desenvolvimento Web. Iniciei meus estudos de forma autodidata e complementei meu aprendizado com cursos online, 
                        sempre com o objetivo de me tornar um desenvolvedor Full Stack. Atualmente, estou desenvolvendo habilidades em Node.js e testes automatizados, 
                        e estou entusiasmado para aplicar e expandir meus conhecimentos em um ambiente profissional."/>
                </Flex>
                <Spacer/>
                <Flex justify='center' flexDirection='column' align='center' margin={['5px','10px']} padding='10px'>
                    <TextFontAbout content="Principais Competências Tecnológicas."/>
                    <TextAbout content="Possuo experiência prática com HTML5, CSS3, TypeScript, React, e Node.js, o que me permite desenvolver aplicações completas e integradas, 
                        desde o front-end até o back-end. Estou sempre em busca de aprender novas técnicas e aprimorar minhas habilidades, 
                        com o objetivo de entregar produtos de alta qualidade."/>
                </Flex>
            </Flex>
            <Spacer/>
            <Flex justify='center' align='center' flexDirection='column'>
                <Flex>
                    <TechCards src={logoHtml} alt={'Logo Html'} text="HTML5"/>
                    <TechCards src={logoCss} alt={'Logo Css'} text="CSS"/>
                    <TechCards src={logoGithub} alt={'Logo GitHub'} text="Git | GitHub"/>
                </Flex>
                <Flex>
                    <TechCards src={logoTypeScript} alt={'Logo TypeScript'} text="Typescript"/>
                    <TechCards src={logoReact} alt={'Logo React'} text="React"/>
                    <TechCards src={logoNode} alt={'Logo Node'} text="Node.js"/>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}