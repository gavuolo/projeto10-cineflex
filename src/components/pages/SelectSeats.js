import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";
//https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats
export default function SelectSeats(){

    return(
        <>
        <Select>
            <p>Selecionar o(s) assento(s)</p>
        </Select>
        <SeatsRoll>
            <Seats>22</Seats>
            <Seats>12</Seats>
            <Seats>12</Seats>
            <Seats></Seats>
            <Seats></Seats>
        </SeatsRoll>
    <Information>
        <p>Nome do comprador:</p>
        <input type="text"/>
    </Information>

    <Information>
        <p>CPF do comprador</p>
        <input type="text"/>
    </Information>
        
        <Reservation />
        </>
    )
}



const Information = styled.div`


`
const Reservation = styled.button`
    width: 225px;
    height: 42px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;

`

const Select = styled.div`
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

const SeatsRoll = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px 0 20px;
    
`

const Seats = styled.div`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    color: #000000;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-left: 7px;
    cursor: pointer;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
`