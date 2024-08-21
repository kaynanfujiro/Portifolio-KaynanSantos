import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ReactNode } from "react";

interface IBoxBorder {
    children: ReactNode;
}

const borderAnimation = keyframes`
0% { border-color: transparent; }
50% { border-color: #09e85e; }
100% { border-color: transparent; }
`;

export const BoxBorderProject = ({children}:IBoxBorder) =>{
    return(
        <Box padding='5px' 
        border='2px solid' 
        borderColor='#09e85e' 
        w={['100%', '300px']} 
        h={['auto', '335px']} 
        maxW='300px'
        _hover={{
          animation: `${borderAnimation} 2s linear infinite`,
          borderColor: '#09e85e',
        }}>
            {children}
        </Box>
    )
}