import React from "react";
import Header from "../../components/Header";
import Home from "../../conponets/Home";

import { container } from './Home.style';
const HomePage = (props) =>{
    return(
        <Container>
            <Header/>
            <Home/>
        </Container>
    )
}