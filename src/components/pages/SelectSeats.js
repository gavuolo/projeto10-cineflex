import styled from "styled-components"
import axios from "axios"

import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom";
//
export default function SelectSeats({nome, setNome, cpf, setCpf, selSeat, setSelSeat, infoMovie, setInfoMovie, semana, setSemana, horario, setHorario, id, setId}){

    const { idSeats } = useParams();
    const [assento, setAssento] = useState([])
   
    

    const colorSelect = '#1AAE9E'
    const colorFree = '#C3CFD9'
    const colorUn ='#FBE192'

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSeats}/seats`);
        promisse.then((dados) => {
            setAssento(dados.data.seats)
            setInfoMovie(dados.data.movie)
            setSemana(dados.data.day.weekday)
            setHorario(dados.data.name)
           
        });
        promisse.catch((erro) =>
            console.log(erro.response.data));
    }, []);



    function Enviar(){
        const obj = { ids: id, name: nome, cpf: cpf}
        console.log(obj)
        const urlPost = `https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`
        const post = axios.post(urlPost, obj);
        
        post.then(() =>{
            alert("Obrigada pela compra!")
            console.log("deu sim")
        }
        )
        post.catch((a)=>{
            alert("Erro! Faltou alguma informação")
            console.log(a.response.data)
        }
        )
    

    }
    function Clicou(cadeira){
        setSelSeat([...selSeat, cadeira])
        setId([...id, cadeira.id])
        console.log(cadeira)
        
    }

    console.log(assento)
    return(
        <>
        <Select>
            <p>Selecionar o(s) assento(s)</p>
        </Select>

        <SeatsRoll>
        {assento.map((a)=>{
            
            return(
                <Seats data-identifier="seat" key={a.id} disabled={a.isAvailable}
                cor={selSeat.includes(a) ? '#1AAE9E' : '#C3CFD9' } 
                onClick={() => Clicou(a)} >
                    {a.name}
                </Seats>
            )

        })}
        </SeatsRoll>

        <Descripiton>
            <SeatsExemple data-identifier="seat-selected-subtitle">
                <Seats cor={colorSelect}></Seats>
                <p>Selecionado</p>
            </SeatsExemple >
            <SeatsExemple data-identifier="seat-available-subtitle" >
                <Seats cor={colorFree}></Seats>
                <p>Disponível</p>
            </SeatsExemple>
            <SeatsExemple data-identifier="seat-unavailable-subtitle" >
                <Seats cor={colorUn}></Seats>
                <p>Indisponível</p>
            </SeatsExemple>
        </Descripiton>


        <Information>
            <p>Nome do comprador:</p>
            <input  data-identifier="buyer-name-input" value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome..."/>
        </Information>

        <Information>
            <p>CPF do comprador</p>
            <input data-identifier="buyer-cpf-input" value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder="Digite seu CPF..."/>
        </Information>
        
        <DivReservation>
        
        <Link to={`/sucesso`}>
            <Reservation data-identifier="reservation-btn" onClick={Enviar}>
                <p>Reservar assento(s)</p>
            </Reservation>
        </Link>
      
            
        </DivReservation>

        <DivFooter>
            <Film>
            <MovieImg data-identifier="movie-img-preview" key={infoMovie.id} src={infoMovie.posterURL} alt={infoMovie.title}/>
            </Film>
                <Text data-identifier="movie-and-session-infos-preview" key={infoMovie.id} >{infoMovie.title}<br/> {semana} - {horario} </Text>
        </DivFooter>
   
        </>
    )
}

const Seats = styled.button`
    width: 26px;
    height: 26px;
    background: ${props => props.cor};
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    &&:disabled{
        background-color: #FBE192;
        cursor: not-allowed;
    }

`

const SeatsSel = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.cor};
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

const Descripiton = styled.div`
    display: flex;
    alight-items: center;
    justify-content: space-around;
    width: 375px;
`
const SeatsExemple = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
    }
`


const Information = styled.div`
    margin: 20px;
    & input{
        width: 327px;
        height: 51px;
    }
    & p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;}

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
    cursor: pointer;
`

const Select = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 130px;
    cursor: default;
`

const SeatsRoll = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 375px;
    padding: 0 20px 0 20px;

    
`



const DivReservation = styled.div`
    margin-top: 30px;
    width: 375px;
    display flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`
/*------------------------FOOTER----------------------------------*/
const DivFooter = styled.div`
    background-color: #DFE6ED;
    width: 375px;
    height: 117px;
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    left: 0;
    border-top: 1px solid #9EADBA;
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

