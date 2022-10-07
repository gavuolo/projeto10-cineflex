import styled from "styled-components"


export default function Movie({images}) {

 
    return (
    <>
    
        {images.map((a)=>
            <Film><ImgMovie key={a.id} src={a.posterURL}/></Film>
        )}
    
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
    cursor: pointer
`
const ImgMovie = styled.img`
    width: 134px;
    height: 184px;
    padding: 8px
    
`