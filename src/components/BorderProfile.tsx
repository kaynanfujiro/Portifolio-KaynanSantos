import { Box, Image, keyframes } from '@chakra-ui/react';
import image from "../Images/1683731867525.jpg"

const blinkBorder = keyframes`
  0% {
    border-color: transparent;
  }
  50% {
    border-color: green;
  }
  100% {
    border-color: transparent;
  }
`;

const BlinkingBorderImage: React.FC = () => {
  return (
    <Box borderRadius='full' borderWidth="2px" borderColor="green.500" boxShadow="0 0 10px 4px rgba(0, 255, 0, 0.7)" animation={`${blinkBorder} 1s infinite`}>
      <Image src={image} borderRadius='full' alt="Imagem" boxSize="200px" objectFit="cover"/>
    </Box>
  );
};

export default BlinkingBorderImage;
// borderRadius='full' boxSize='180px