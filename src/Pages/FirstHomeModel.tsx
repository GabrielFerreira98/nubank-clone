import { LearnMore } from "../Components/LearnMore";
import { TitleText } from "../Components/TitleText";

interface FirstHomeModel{
    image: string,
    title: string,
    subtitle: string;
    backgroundColor: string;
    heigth: string;
    width: string;
}

export function FirstHomeModel(props: FirstHomeModel){
    return (

    <div className={`flex items-center justify-center gap-[10vw] w-full h-screen bg-${props.backgroundColor}`}>
        <div className="w-2/5 flex flex-col gap-4">
            <TitleText children={props.title} color="purple" font="semibold"/>
            <TitleText children={props.subtitle} color="" font="semibold"/>
            <LearnMore/>
        </div>

        <img className={`h-[${props.heigth}] w-${props.width}`} src={`${props.image}`} alt="" />
    </div>
    )
}