interface educationProps {
    place: string;
    role: string;
    date: string;
    description: string;
    title: string;
  }
  const EducationCard = ({
    place,
    description,
    role,
    date,
    title,
  }: educationProps) => {
    return (
      <div className="bg-neutral-50 pt-5 px-10 w-96 min-w-max rounded-xl m-2">
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          <div className="mb-5 font-bold text-lg">{place}</div>
          <div className="mb-5 font-bold text-lg">{title}</div>
          <div className="flex font-medium">
            {role}
            <div className="ml-5 bg-rose-700 p-1 text-xs text-neutral-50 h-fit w-fit">
              {date}
            </div>
          </div>
          <div className="mb-2 text-wrap">
            <h4 className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xl">
              {description}
            </h4>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  };
  
  export default EducationCard;