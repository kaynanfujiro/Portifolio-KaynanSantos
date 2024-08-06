import { Box, Center, Flex, Image, Link, Text, Wrap, WrapItem } from '@chakra-ui/react'


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
        <Flex margin='15px'>
            <Box padding='5px' border='2px solid' borderColor='#09e85e' w='300px' h='335px'>
                <Center>
                    <Image w='300px' h='150px' src={ImageProject}/>
                </Center>
                <Text fontSize='1xl' color='#FEFDFB'>{Title}</Text>
                <Text fontSize='lg' color='#7a878d' >{Description}</Text>
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
                    <Text fontSize='lg' color='#FEFDFB'>
                        {View}
                    </Text>
                </Link>
            </Box>
        </Flex>
    )
}

export default CardProject