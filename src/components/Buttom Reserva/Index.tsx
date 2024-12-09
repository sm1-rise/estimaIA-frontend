import { ButtonStyled } from "./style";

interface Props {
    text: string;
    bgColor?: string;
    color?: string;
}

export default function ButtonMain({text, bgColor, color  }: Props){
    return (<>
        <ButtonStyled  bgColor={bgColor} color={color}>
            {text}
        </ButtonStyled>
    </>
    );
}