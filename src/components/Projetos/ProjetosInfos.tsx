import CardProject from "./ProjectsComponents"
import ImageLegadoDoOeste from '../../Images/LegadoDoOeste.png'
import ImageDioBank from '../../Images/DioBank.png'
import ImageWeatherForecast from '../../Images/WeatherForecast.png'

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

export const WeatherForecast = () => {
    return (
        <CardProject 
            ImageProject={ImageWeatherForecast} 
            Title="Previsão Do Tempo"
            Description="Projeto Utiliza API para verificar o clima"
            Tech={["React", "Typescript", "Vite", "Axios"]}
            View="View project >"
            LinkUrl="https://weather-forecast-wheat-two.vercel.app"
        />
    )
}



