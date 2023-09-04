interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ( {title} ) => {
    return ( 
        <div>
            <h1 className="text-7xl text-white font-semibold text-center py-16">{title}</h1>
        </div>
     );
}
 
export default Title;