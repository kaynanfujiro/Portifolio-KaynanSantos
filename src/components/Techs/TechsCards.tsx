import { Image} from '@chakra-ui/react';



const TechCards = ({src, alt}:any) => {
  return (
    <Image src={src} alt={alt} w="120px" _hover={{transform: 'scale(1.1)', transition: '0.3s'}}/>
  );
};

export default TechCards;