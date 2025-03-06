import { Center, Flex, Image, Link, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { BoxBorderProject } from './ProjectsBorder';

interface IProjectsComponents {
    ImageProject: string;
    Title: string;
    Description: string;
    Tech: string[];
    View: string;
    LinkUrl: string;
}

const CardProject = ({ ImageProject, Title, Description, Tech, View, LinkUrl }: IProjectsComponents) => {
    return (
        <Flex margin={['5px', '15px']} justifyContent="center">
            <BoxBorderProject>
                <Center>
                    <Image w="100%" h={['auto', '150px']} src={ImageProject} objectFit="cover" />
                </Center>
                <Text fontSize={['lg', '1xl']} color="#FEFDFB" mt={2}>{Title}</Text>
                <Text fontSize={['sm', 'lg']} color="#7a878d" mt={2}>{Description}</Text>
                <Wrap spacing={2} mt={2}>
                    {Tech.map((tech, index) => (
                        <WrapItem key={index}>
                            <Text
                                fontSize="md"
                                color="#FEFDFB"
                                border="2px solid"
                                borderColor="#09e85e"
                                backgroundColor="transparent"
                                borderRadius="5px"
                                p={1}
                                transition="all 0.3s ease" 
                                _hover={{
                                    backgroundColor: "#09e85e", 
                                    color: "#000",
                                    transform: "scale(1.05)", 
                                    cursor: "pointer",
                                }}
                            >
                                {tech}
                            </Text>
                        </WrapItem>
                    ))}
                </Wrap>
                <Link target="_blank" href={LinkUrl} isExternal mt={2}>
                    <Text fontSize={['md', 'lg']} color="#FEFDFB">
                        {View}
                    </Text>
                </Link>
            </BoxBorderProject>
        </Flex>
    );
};

export default CardProject;