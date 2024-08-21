import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

// interface IBtnCurriculo {
//     Description: string,
//     LinkUrl: string,
// }

export const BtnCurriculo = () => {
    return(
    <Button bg='#219ebc' borderRadius='10px' color='white' transition="transform: 0.2s ease-in-out" _hover={{ boxShadow: '0px 0px 20px 5px #219ebc'}}><Link target="_blank" to="https://drive.google.com/file/d/1jCPjLiq6uSuqalf7Poas02jIYsoqWg3r/view?usp=drive_link">Curriculo</Link></Button>
    )
}