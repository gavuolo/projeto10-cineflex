
import Header from "./Header";
import SelectMovie from "./pages/SelectMovie";
import SelectSeats from "./pages/SelectSeats";
import SelectSection from "./pages/SelectSection";
import FinishTicket from "./pages/FinishTicket"
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


return (

    <BrowserRouter>
        <GlobalStyle/>
        <Header />
        <Routes>
            <Route path="/" element={<SelectMovie />}/>
            <Route path="/sessao/:idMovies" element={<SelectSection />}/>
            <Route path="/assentos/:idSeats" element={<SelectSeats />}/>
            <Route path="/finishticket" element={<FinishTicket />}/>
        </Routes>
    </BrowserRouter>

    )
}