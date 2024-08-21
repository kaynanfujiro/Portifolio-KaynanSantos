import { Box, Image, Text} from '@chakra-ui/react';

interface ITechCards {
  src: string,
  alt: string,
  text: string,
}

const TechCards = ({src, alt,text}:ITechCards) => {
  return (
    <Box textAlign='center'>
      <Image src={src} alt={alt} w="150px" _hover={{transform: 'scale(1.1)', transition: '0.3s'}}/>
      <Text color='white' mt={2} fontFamily="'Fira Code', monospace">{text}</Text>
    </Box>
  );
};

export default TechCards;