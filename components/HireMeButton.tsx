interface ButtonProps {
    text:string;
}

const HireMeButton = ({text} : ButtonProps) => {
  return <button className="bg-rose-700 text-center px-6 py-3 hover:scale-105 hover:bg-rose-700  font-bold rounded-md mt-7">
    <span className="text-md font-semibold">{text}</span>
  </button>;
  
}

export { HireMeButton };