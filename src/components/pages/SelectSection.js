import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom";


export default function SelectSection() {

    const { idMovies } = useParams();
    const [days, setDays] = useState([])
    const [infoMovie, setInfoMovie] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovies}/showtimes`);
        promisse.then((dados) => {
            setDays(dados.data.days)
            setInfoMovie(dados.data)

        });
        promisse.catch((erro) =>
            console.log(erro.response.data));
    }, []);



    return (
        <>
            <SelectTime>
                <p>Selecione o horário</p>
            </SelectTime>

            {days.map((a, index) => {
                return (<>

                    <MovieDay key={index}>
                        <p>{a.weekday}- {a.date}</p>
                    </MovieDay>
                
                    <MovieTime>
                        {a.showtimes.map((b, index) => {
                            return (
                            <Link to={`/assentos/${b.id}`}>
                                <ButtonTime key={index}>
                                    {b.name}
                                </ButtonTime>
                            </Link>
                            )}
                        )}
                    </MovieTime>
            </>)
            })}



        <DivFooter>
            <Film>
            <MovieImg src={infoMovie.posterURL} alt={infoMovie.title}/>
            </Film>
                <Text >{infoMovie.title}</Text>
        </DivFooter>
        </>
    )
}
/*   */

const SelectTime = styled.div`
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
    width: 375px;
`
const MovieDay = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    margin: 0 20px 0 20px;
    width: 375px;
    height: 50px;
    cursor: default;

`

const MovieTime = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
`
const ButtonTime = styled.button`
    margin: 5px 20px 5px 20px;
    color: #FFFFFF;
    width: 82px;
    height: 43px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    background: #E8833A;
    border-radius: 3px;
    cursor: pointer;
`
/*------------------------FOOTER----------------------------------*/
const DivFooter = styled.div`
    background-color: #DFE6ED;
    width: 375px;
    height: 117px;
    display: flex;
    align-items: center;
    border-top: 1px solid #9EADBA;
    margin-top: 20px;
`
const MovieImg = styled.img`
    width: 50px;
    height: 75px;

`
const Film = styled.div`
    width: 64px;
    height: 89px;
    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px
`

const Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    margin-left: 20px;
`

