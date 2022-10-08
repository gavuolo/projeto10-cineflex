import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom";


export default function SelectSection() {

    const { idMovies } = useParams();
    const [days, setDays] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovies}/showtimes`);
        promisse.then((dados) => {
            setDays(dados.data.days)

        });
        promisse.catch((erro) =>
            console.log(erro.response.data));
    }, []);

    let time = []

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
                        {a.showtimes.map((b) => {
                            return (
                            <Link to={`/assentos/${b.id}`}>
                                <ButtonTime>
                                    {b.name}
                                </ButtonTime>
                            </Link>
                            )}
                        )}
                    </MovieTime>


            </>)
            })}

        </>
    )
}


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