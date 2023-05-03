import styled from 'styled-components';
import {FaSearch}from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from '../img/favicon-32x32.png';
import { Link } from "react-router-dom";

function Search (){
    const [input, setInput] = useState("");
    const naviget = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        naviget('/searched/'+input);
    }

    return(<NavContainer>
        <Link to="/">
            <img src={icon} alt="icon"/>
        </Link>
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            </div>
        </FormStyle>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    align-items: center;

    img{
        border: 2px solid #fff;
        padding: 10px;
        border-radius: 50%;
    }
    img:hover{
        transition:all 0.3s ease-in-out ;
        background-color: #fff;
    }
`

const FormStyle = styled.form`
margin: 0rem auto;
width: 60%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        padding: 1rem 3rem;
    }
    div{
        position: relative;
        width: 100%;
    } 
    svg{
        position: absolute;
        top:50%;
        left: 0;
        transform: translate(100%, -50%);
        color:#fff;
    }
    @media screen and (max-width: 1500px) {
    margin: 0;
    width: 100%;
  }
`

export default Search;