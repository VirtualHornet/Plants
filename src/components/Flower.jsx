import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '@splidejs/react-splide/css';
function Flower(){

    const [flower, setFlower] = useState([]);

    useEffect(()=>{
        getFlower();
               
    },[])

    const getFlower = async () =>{
        const check = localStorage.getItem("flower");
        if(check){
            setFlower(JSON.parse(check))
        }else{
        const api = await fetch("https://perenual.com/api/species-list?key=sk-8Xli644bd3b0d9943692&q=flower&indoor=1");
        const data = await api.json();
        console.log(data.data);
        localStorage.setItem("flower", JSON.stringify(data.data));
        setFlower(data.data);
        }
    }

   

    return(
        <div>
            <Wrapper>
                <h3>Meaty Dishes</h3>
                <Splide 
                    options={{
                        arrow: "false",
                        drag: "free",
                        gap: "4rem",
                        type   : 'loop',
                        autoplay: true,
                        perPage: 2,
                        focus  : 'center',
                        breakpoints: {
                            1000: { 
                                direction: 'ttb',
                                height:"100vh",
                                gap: "2rem"
                            }
                      }
                    }}
                >
                    {flower.map(flower=>{
                        return(
                            <SplideSlide>
                                <Card key={flower.id}>
                                    <Link to={"/plant/"+flower.id}>
                                        <h2>{flower.common_name}</h2>
                                        <p>{flower.scientific_name}</p>
                                        <img src={flower.default_image.regular_url} alt="img" />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                    {/*(flower.length!==0)?flower.map((recipe)=>{
                    return(
                        <div key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/'+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient />
                                </Link>
                            </Card>
                        </div>
                    )
                    }):""*/}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div `
    margin: 4rem 0;
    color: #fff;
`;

const Card = styled.div`
    height: 30vh;
    color: #000;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 1rem;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h2{
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
        z-index: 10;
        text-align: center;
    }
    p{
        position: absolute;
        z-index: 10;
        bottom: 0%;
        color: #fff;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), #000000);
`

export default Flower;