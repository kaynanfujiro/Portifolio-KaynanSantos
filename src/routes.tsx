import { Route, Routes } from "react-router-dom"
import { SobreMim } from "./pages/SobreMim"
import { Projetos } from "./pages/Projetos"
import { Tech } from "./pages/Tech"
import { Box, Spacer } from "@chakra-ui/react"



// const MainRoutes = () => {
//     return(
//             <Routes>
//                 <Route path='/' element={<SobreMim/>}/>
//                 <Route path='/Tech' element={<Tech/>}/>
//                 <Route path='/Projetos' element={<Projetos/>}/>
//             </Routes>
//     )
// }


const MainRoutes = () => {
    return (
        <Box>
        <Box id="sobre-min" marginBottom='250px'>
          <SobreMim />
        </Box>
        <Box id="tech" marginBottom='250px'>
          <Tech />
        </Box>
        <Box id="projetos">
          <Projetos />
        </Box>
      </Box>
    );
};
export default MainRoutes;