import { FaLightbulb } from "react-icons/fa";

interface skills {
  name: string;
}

const extraSkills = ({ name }: skills) => {
  return (
    <div>
      <FaLightbulb className="mr-5 float-left" color="#0e7490" />
      <h2>{name}</h2>
    </div>
  );
};

export default extraSkills;