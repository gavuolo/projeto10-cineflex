import styled from "styled-components"

export default function Header(){

    return(
        <>
        <TopBar>
            <h1>CINEFLEX</h1>
        </TopBar>
        <SelectFilm>
            <p>Selecionar filme</p>
        </SelectFilm>
        </>
    )

}

const TopBar = styled.div`
    width: 375px;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    & h1{
        color:#E8833A;
        font-family: 'Roboto';
        font-size: 34px;
        line-height: 40px;
        font-weight: 600;
    }
`
const SelectFilm = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 50px;
`
