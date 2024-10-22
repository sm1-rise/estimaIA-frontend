import { createGlobalStyle } from "styled-components";
import {styled} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        
    }
    
    body{
        background: #F2F2F2;
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
`

export const GlobalMain = styled.main`

    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    //background-color: #ec5353;
    background-color: #000;
    height: 500px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
 
`
