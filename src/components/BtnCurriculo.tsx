import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface IBtnCurriculo {
    Description: string,
    LinkUrl: string,
}

export const BtnCurriculo = ({Description,LinkUrl}: IBtnCurriculo) => {
    return(
    <Button bg='#219ebc' borderRadius='10px' color='white' transition="transform: 0.2s ease-in-out" _hover={{ boxShadow: '0px 0px 20px 5px #219ebc'}}>Currículo</Button>
    )
}