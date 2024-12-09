import {ContainerHeader, HeaderStyle, HoverLi, Menu} from "./style.ts";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header(){
    return(
      <>
        <HeaderStyle>
            <ContainerHeader>

               <Link to ={"/home"}> <img src={Logo} width={80}/> </Link>
                <Menu>
                    <ul>
                        <li>
                            <HoverLi>
                                <Link to={"/home"}>
                                     Home
                                </Link> 
                            </HoverLi>
                        </li>
                        <li>
                            <HoverLi>
                                <Link to={"/rooms"}>
                                     Rooms
                                </Link> 
                            </HoverLi>
                        </li>
                        <li>
                            <HoverLi>
                                <Link to={"/help"}>
                                     Help
                                </Link> 
                            </HoverLi>
                        </li>
                    </ul>
                </Menu>
            </ContainerHeader>
        </HeaderStyle>
      </>
    );
}
