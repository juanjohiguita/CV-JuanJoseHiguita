import React, { Dispatch, SetStateAction, useState } from 'react'
import { DialogPortafolio } from './DialogPortafolio';
import { FaUnderline } from 'react-icons/fa';

interface PortafolioProps {
  image: string;
  title: string;
  text: string;
  link?: string;
  alt?: string;
}
const Portafolio = ({ image, title, text, link, alt }: PortafolioProps) => {

  const [PortfolioDialogOpen, setDialogPortfolioOpen] = useState<boolean>(false)

  const handlePortfolioClick = () => {
    setDialogPortfolioOpen(true)
  }

  return (
    <div className="m-10 text-justify bg-neutral-50 min-w-max hover:bg-neutral-100 rounded-2xl">
      <div className="mt-10 h-36 flex justify-center bg-neutral-100">
        <img src={image} alt={alt} className="m-auto w-40" />
      </div>
      <br></br>
      <div className="text-left mx-10 mb-5">
        <h2 className="text-xl mb-5 font-medium">{title}</h2>
        <h4 className="mb-2 text-gray-500 whitespace-normal max-w-xs font-medium">
          {text}
        </h4>
        <a className="hover:underline" style={{fontWeight: 500, fontSize: 18, color: "#be123c"}} onClickCapture={handlePortfolioClick}>Learn More &gt;</a>
          <DialogPortafolio open={PortfolioDialogOpen} setPortfolioDialogOpen={setDialogPortfolioOpen} image ={image} link={link}  description={text}/>
      </div>
    </div>
  );
};

export default Portafolio;