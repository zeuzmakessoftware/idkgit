interface SubtitleProps {
    title: string;
}

const Subtitle: React.FC<SubtitleProps> = ( {title} ) => {
    
    return ( 
        <div className="flex justify-center align-center">
            <h3 className="text-3xl text-[#999999] font-normal w-[400px] sm:w-[800px] my-4">{title}</h3>
        </div>
     );
}
 
export default Subtitle;