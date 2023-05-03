import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Plant(){

    const params = useParams();
    const [plantDetails, setPlantDetails] = useState({});
    const [img_url, setImgUrl]= useState("");

    useEffect(()=>{
        getPlantDetails(params.id);
        console.log("plant\n"+plantDetails);
    },[params.id])

    const getPlantDetails=async(id)=>{
        const data = await fetch("https://perenual.com/api/species/details/"+id+"?key=sk-8Xli644bd3b0d9943692");
        const res = await data.json();
        console.log(res)
        setPlantDetails(res);
        setImgUrl(res.default_image.medium_url);
    }
    

    return(
        <Wrapper>
            <Left>
                <h1>{plantDetails.common_name}</h1>
               <img src={img_url} alt="img"/>
            </Left>
            <Rigth>
                <Property>
                    <div >
                        <h3>Care Level: </h3>
                        <h3>Cycle: </h3>
                        <h3>Dimension:</h3>
                        <h3>Family:</h3>
                        <h3>Growth rate:</h3>
                        <h3>Maintenance:</h3>
                        <h3>Medicinal:</h3>
                        <h3>Origin:</h3>
                        <h3>Other name:</h3>
                        <h3>Propagation</h3>
                    </div>
                   <div>
                        <h3>{plantDetails.care_level}</h3>
                        <h3>{plantDetails.cycle}</h3>
                        <h3>{plantDetails.dimension}</h3>
                        <h3>{plantDetails.family}</h3>
                        <h3>{plantDetails.growth_rate}</h3>
                        <h3>{plantDetails.maintenance}</h3>
                        <h3>{plantDetails.medicinal}</h3>
                        <h3>{plantDetails.origin}</h3>
                        <h3>{plantDetails.other_name}</h3>
                        <h3>{plantDetails.propagation}</h3>



      
                     

                    </div>  
                </Property>
                <h2>Description</h2>
                <h3>{(plantDetails.description===null)?"No description available":plantDetails.description}</h3>
            </Rigth>
            
        </Wrapper>
        
    )
}


const Wrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
    height: 90vh;
    color: #fff;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.);
    & > *{
        opacity: 1;
    }
`

const Property = styled.div`
    display: flex;
    justify-content: space-around;
`
const Left = styled.div`
    width: 40%;
    img{
        width: 100%;
        border-radius: 15px;
        border: 2px solid #fff;
    }
    h1{
        text-transform: uppercase;
    }
`
const Rigth = styled.div`
    width: 60%;
    margin-top: 3rem;
    margin-left: 1rem;
`
   


export default Plant;