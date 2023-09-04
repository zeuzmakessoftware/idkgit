interface SubtitleProps {
    title: string;
}

const Subtitle: React.FC<SubtitleProps> = ( {title} ) => {
    
    return ( 
        <div className="flex justify-center align-center">
            <h1 className="text-3xl text-[#999999] font-normal py-4 w-[800px]">{title}</h1>
        </div>
     );
}
 
export default Subtitle;