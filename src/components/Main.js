import Movie from "./Movie"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

export default function Main(){
    const [images, setImages] = useState([])

    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const promise = axios.get(URL)
    
    promise.then((dados) =>{
        setImages(dados.data)
    })
    promise.catch((erro)=>{
        //console.log(erro.response,data)
    })
   


    return(
        <ContainerFilm>
            <Movie
            images={images}
            />
        </ContainerFilm>
    )
}

const ContainerFilm = styled.div`
    width: 375px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`