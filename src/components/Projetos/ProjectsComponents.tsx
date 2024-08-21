import { Box, Center, Flex, Image, Link, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { BoxBorderProject } from './ProjectsBorder'

interface IProjectsComponents{
    ImageProject: string,
    Title: string,
    Description: string,
    Tech: string[],
    View: string,
    LinkUrl: string,
}

const CardProject = ({ImageProject,Title,Description,Tech,View,LinkUrl}: IProjectsComponents) => {

    return(
        <Flex margin={['5px','15px']} justifyContent='center'>
            <BoxBorderProject>
                <Center>
                    <Image w='100%' h={['auto','150px']} src={ImageProject}/>
                </Center>
                <Text fontSize={['lg','1xl']} color='#FEFDFB'>{Title}</Text>
                <Text fontSize={['sm','lg']} color='#7a878d' >{Description}</Text>
                <Wrap spacing={2} mt={2}>
                    {Tech.map((tech, index) => (
                        <WrapItem key={index}>
                            <Text fontSize='md' color='#7a878d.500' border='2px solid' borderColor='#09e85e' 
                                backgroundColor='#09e85e' 
                                borderRadius='5px'
                                p={1}
                            >
                                {tech}
                            </Text>
                        </WrapItem>
                    ))}
                </Wrap>
                <Link href={LinkUrl} isExternal>
                    <Text fontSize={['md','lg']} color='#FEFDFB'>
                        {View}
                    </Text>
                </Link>
            </BoxBorderProject>
        </Flex>
    )
}

export default CardProject