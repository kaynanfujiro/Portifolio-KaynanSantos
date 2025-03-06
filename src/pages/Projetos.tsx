import { Flex, Grid } from "@chakra-ui/react";
import { AnimeDex, DioBank, LegadoDoOeste, WeatherForecast } from "../components/Projetos/ProjetosInfos";

export const Projetos = () => {
    return (
        <Flex
            id="projetos-section"
            fontFamily="Roboto"
            maxWidth="100%"
            width="100%"
            mx="auto"
            overflow="hidden"
            justifyContent="center"
        >
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap={6}
                width="100%"
                maxWidth="1200px" // Ajuste conforme necessário
            >
                <LegadoDoOeste />
                <DioBank />
                <WeatherForecast />
                <AnimeDex />
            </Grid>
        </Flex>
    );
};