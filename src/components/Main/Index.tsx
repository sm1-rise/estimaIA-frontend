import { GlobalMain } from "../../shared/GlobalStyle";
import ButtonMain from "../Buttom/Index";
import { ContainerBotao, ContainerConteudo, ContainerTexto, ContainerTitulo, Section } from "./style";

export default function Main(){
    
 
    return (<>
      
      <GlobalMain>
        <Section>
          <ContainerTitulo>
            <h1>Bem vindo ao EstimaPoker</h1>
          </ContainerTitulo>
          <ContainerConteudo>
            <ContainerTexto>
              <p>EstimaPoker, é sua solução perfeita para seu projeto Ágil!</p>
            </ContainerTexto>
            <ContainerBotao>
              <ButtonMain text="Criar Sala"></ButtonMain>
              <h1>botao2</h1>
            </ContainerBotao>
          </ContainerConteudo>
        </Section>
      </GlobalMain>
    </>
    );
  }
