interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ( {title} ) => {
    return ( 
        <div className="py-16 relative top-8">
            <h1 className="sm:text-9xl text-7xl text-white font-semibold text-center">{title}</h1>
        </div>
     );
}
 
export default Title;