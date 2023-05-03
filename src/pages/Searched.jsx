import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Searched (){

    const [plants, setPlants] = useState([]);
    let param = useParams();
    
    useEffect(()=>{
        fetchData(param.name);
        console.log(plants) 
    },[param.name])

    const fetchData = async (name) =>{
        const api = await fetch("https://perenual.com/api/species-list?key=sk-8Xli644bd3b0d9943692&q="+name);
        const data = await api.json();
        console.log(data.data)
        setPlants(data.data);
    }


    return (
        <Wrapper>
        {plants.map(item =>{
            return(
                <Card key={item.id}>
                    <Link to={"/plant/"+item.id}>
                        <h2>{item.common_name}</h2>
                        <p>{item.scientific_name}</p>
                        <img src={item.default_image.regular_url} alt="img"/>
                    </Link>
                </Card>
            )
        })}
        </Wrapper>
    )
}

export default Searched;

const Wrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    width: 20%;
    background-color: #ffffff;
    opacity: 0.8;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    img{
        width:100%;
        height: auto;
    }
    &:hover{
        opacity: 1;
        transition: all 0.3s ease-in-out ;
    }
    a{
        text-decoration: none;
        color: #000;
    }

`