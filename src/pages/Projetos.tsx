import { Flex } from "@chakra-ui/react"
import { DioBank, LegadoDoOeste } from "../components/Projetos/ProjetosInfos"



export const Projetos = () =>{
    return(
        <>
        <Flex justify='Center' fontFamily='Roboto'>
            <LegadoDoOeste/>
            <DioBank/>
        </Flex>
        </>
    )
}