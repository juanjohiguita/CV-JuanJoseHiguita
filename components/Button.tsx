interface ButtonProps {
    text:string;
}

const Button = ({text} : ButtonProps) => {
  return <button className="bg-[#FFB400] px-3 py-1 rounded-md hover:scale-105">
    <span className="text-md font-semibold">{text}</span>
  </button>;
  
}

export { Button };