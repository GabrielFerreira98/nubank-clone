interface SecondHomeModel{
    image: string;
    children: string;
    learnMoreText: string;
    childrenTitle ?: string;
}

export default function(props: SecondHomeModel){
    return (
        <div className={`w-full h-[100vh] bg-${props.image} bg-cover flex flex-col items-center justify-center`}>
            <div className="w-1/3">
                <div className="text-5xl text-white font-semibold mb-8">{props.childrenTitle}</div>
                <div className="text-5xl text-white font-semibold mb-8">{props.children}</div>
                <div className="text-white text-lg font-semibold">{props.learnMoreText}</div>
            </div>
        </div>
    )
}