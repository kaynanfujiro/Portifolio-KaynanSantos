import CardProject from "./ProjectsComponents"
import ImageLegadoDoOeste from '../../Images/LegadoDoOeste.png'
import ImageDioBank from '../../Images/DioBank.png'

export const LegadoDoOeste = () => {
    return (
        <CardProject 
            ImageProject={ImageLegadoDoOeste} 
            Title="Legado Do Oeste"
            Description="GDD Realizado para um jogo Desenvolvido na Faculdade"
            Tech={["React", "Typescript"]}
            View="View project >"
            LinkUrl="https://gdd-legado-do-oeste.vercel.app"
        />
    )
}

export const DioBank = () => {
    return (
        <CardProject 
            ImageProject={ImageDioBank} 
            Title="DioBank"
            Description="Projeto relaciona ao curso da DIO - FullStack"
            Tech={["React", "Typescript"]}
            View="View project >"
            LinkUrl="https://diobank-sable.vercel.app"
        />
    )
}



