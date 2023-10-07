interface SubtitleProps {
    title: string;
    text: string;
  }
  
  const Subtitle = ({ title, text }: SubtitleProps) => {
    return (
      <div className="text-center p-10 w-96 min-w-max m-2">
        <h2 className="text-4xl mb-5 font-bold">{title}</h2>
        <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xl">{text}</h4>
      </div>
    );
  };
  
  export default Subtitle;