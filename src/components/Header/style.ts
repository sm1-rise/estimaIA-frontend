import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #ec5353;
    height: 80px;
`
export const ContainerHeader = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HoverLi = styled.a`
    a{
        color:#fff;
        text-decoration:none;
        position: relative;
        font-weight: 600;
        &:hover {
            &::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #fff;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
`;

export const Menu = styled.nav`
    ul{
        list-style:none;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items:center;
   }
    li{
        padding: 25px;
        cursor: pointer;
    }
`;



