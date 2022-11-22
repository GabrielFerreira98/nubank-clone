interface TitleText{
    color: string;
    font: string;
    children: string;

}

export function TitleText(props: TitleText){
    return(
        <div className={`text-${props.color} font-${props.font} text-5xl`}>
            {props.children}
        </div>
    )
    
}