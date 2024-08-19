import { Text } from "@chakra-ui/react";

interface ITextAbout{
    content: string
}

export const TextFontAbout = ({content}:ITextAbout) => {
    return(
           <Text fontSize={['xl','2xl']} color='#FEFDFB'>{content}</Text>
    )
}


export const TextAbout = ({content}:ITextAbout) => {
    return(
           <Text fontSize={['xl','2xl']} color="grey" textAlign='justify' w={['300px','600px']}>{content}</Text>
    )
}
