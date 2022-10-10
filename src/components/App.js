
import Header from "./Header";
import SelectMovie from "./pages/SelectMovie";
import SelectSeats from "./pages/SelectSeats";
import SelectSection from "./pages/SelectSection";
import FinishTicket from "./pages/FinishTicket"
import GlobalStyle from "./GlobalStyle";
import { useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [Cpf, setCpf] = useState([])
    const [nome, setNome] = useState([])
    const [selectSeat, setSelectSeat] = useState([])
    const [infoMovie, setInfoMovie] = useState([])
    const [semana, setSemana] = useState([])
    const [horario, setHorario] = useState([])
    const [id, setId] = useState([])
return (

    <BrowserRouter>
        <GlobalStyle/>
        <Header />
        <Routes>
            <Route path="/" element={<SelectMovie />}/>
            <Route path="/sessao/:idMovies" element={<SelectSection/>}/>
            <Route path="/assentos/:idSeats" element={<SelectSeats 
            nome={nome} 
            setNome={setNome} 
            cpf={Cpf}
            setCpf={setCpf}
            selSeat={selectSeat}
            setSelSeat={setSelectSeat}
            infoMovie={infoMovie}
            setInfoMovie={setInfoMovie}
            semana={semana}
            setSemana={setSemana}
            horario={horario}
            setHorario={setHorario}
            id={id}
            setId={setId}
            />}
            />
            <Route path="/sucesso" element={<FinishTicket
            nome={nome} 
            cpf={Cpf}
            selSeat={selectSeat}
            infoMovie={infoMovie}
            semana={semana}
            horario={horario}
            id={id}
            />}
            />
        </Routes>
    </BrowserRouter>

    )
}