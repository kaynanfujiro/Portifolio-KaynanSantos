import { Route, Routes } from "react-router-dom"
import { SobreMim } from "./pages/SobreMim"
import { Projetos } from "./pages/Projetos"
import { Redes } from "./pages/Redes"
import { Tech } from "./pages/Tech"
import { Box } from "@chakra-ui/react"



const MainRoutes = () => {
    return(
            <Routes>
                <Route path='/' element={<SobreMim/>}/>
                <Route path='/Tech' element={<Tech/>}/>
                <Route path='/Projetos' element={<Projetos/>}/>
                <Route path='/Redes' element={<Redes/>}/>
            </Routes>
    )
}


// const MainRoutes = () => {
//     return (
//         <Box>
//         <Box id="sobre-min">
//           <SobreMim />
//         </Box>
//         <Box id="tech">
//           <Tech />
//         </Box>
//         <Box id="projetos">
//           <Projetos />
//         </Box>
//         <Box id="redes">
//           <Redes />
//         </Box>
//       </Box>
//     );
// };
export default MainRoutes;