import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function FinishTicket({nome, cpf, selSeat, infoMovie, semana, horario}){

    
    //Post
    //const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`);
    console.log(infoMovie)
    return(
        <>
        <Confirmation>
            <p>Pedido feito<br/>
            com sucesso!</p>
        </Confirmation>

        <Information>
            <Negrito>Filme e Sessão</Negrito>
            <p>{infoMovie.title}</p>
            <p>{semana} - {horario}</p>
        </Information>

        <Information>
            <Negrito>Ingressos</Negrito>
            {selSeat.map((a, index)=>{
                return(
                    <p key={index}>Assento {a.name}</p>
                )
            })}
              
        </Information>

        <Information>
            <Negrito>Comprador</Negrito>
            <p>Nome: {nome}</p>
            <p>CPF: {cpf}</p>
        </Information>


        <BackHome>
            <Link to="/">
                <ButtonHome>
                    <p>Voltar pra Home</p>
                </ButtonHome>
            </Link>        
        </BackHome>
        </>
    )
}

const Confirmation = styled.div`
    width: 374px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    &  p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #247A6B;
        text-align: center;
    }
`
const Negrito = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

const Information = styled.div`
    width: 375px;
    height: auto;
    margin: 0 20px 20px 20px;
& p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
}
`
const BackHome = styled.div`
    width: 375px;
    height: 67px;
    display: flex;
    justify-content: center;
`

const ButtonHome = styled.button`
    width: 225px;
    height: 42px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    cursor: pointer;
`