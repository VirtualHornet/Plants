import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Plant from "./Plant";
import Searched from "./Searched";
import styled from "styled-components";
function Pages (){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/plant/:id" element={<Plant />}/>
            <Route path="/searched/:name" element={<Searched />}/>
        </Routes>
    )
}
export default Pages;