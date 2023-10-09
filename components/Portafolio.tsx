interface PortafolioProps {
    image?: string;
    title: string;
    text: string;
    link?: string;
    alt?: string;
}
const Portafolio = ({ image, title, text, link, alt }: PortafolioProps) => {
    return (
        <div className="m-10 text-justify bg-neutral-50 min-w-max hover:bg-neutral-100 rounded-2xl">
          <div className="mt-10 h-36 flex justify-center bg-neutral-100">
            <img src={image} alt="Portfolio image" className="m-auto w-40" />
          </div>
          <br></br>
          <div className="mx-10 mb-5 text-left">
            <h2 className="mb-5 font-medium text-xl">{title}</h2>
            <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xs">
              {text}
            </h4>
            {link ? (
              <a
                className="text-cyan-700 font-bold text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
              >
                Learn More {">"}
              </a>
            ) : null}
          </div>
        </div>
      );
};

export default Portafolio;