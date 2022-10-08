import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"

import { Link } from "react-router-dom";

export default function SelectMovie() {
    const [movies, setMovies] = useState([])
 
    useEffect( () => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)
        
        promise.then((dados) =>{
            setMovies(dados.data)
            
        })
        promise.catch((erro)=>{
            console.log(erro.response.data)
        })

    }, [])

    

    return (
    <>
        <ContainerFilm>
            <SelectFilm>
                <p>Selecionar filme</p>
            </SelectFilm>

            
        {movies.map((movie)=> 
        <Link to={`/sessao/${movie.id}`}> 
            <Film>
                <ImgMovie key={movie.id} src={movie.posterURL} alt={movie.title}/> 
            </Film>
        </Link>)}
            
        </ContainerFilm>
    </>
)
}


const Film = styled.div`
    width: 150px;
    height: 200px;
    background-color: white;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`
const ImgMovie = styled.img`
    width: 134px;
    height: 184px;
    cursor: pointer;
`
const ContainerFilm = styled.div`
    width: 375px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const SelectFilm = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 130px;
    cursor: default;
`
