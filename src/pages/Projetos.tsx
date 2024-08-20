import { Flex } from "@chakra-ui/react"
import { DioBank, LegadoDoOeste } from "../components/Projetos/ProjetosInfos"

export const Projetos = () =>{
        
    return(
        <>
        <Flex id="projetos-section" justify='Center' fontFamily='Roboto' direction={['column', 'row']}>
            <LegadoDoOeste/>
            <DioBank/>
        </Flex>
        </>
    )
}