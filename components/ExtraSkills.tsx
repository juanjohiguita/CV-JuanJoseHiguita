import { FaLightbulb } from "react-icons/fa";

interface skills {
  name: string;
}

const extraSkills = ({ name }: skills) => {
  return (
    <div>
      <FaLightbulb className="float-left mr-5" color="#e11d48" />
      <h2>{name}</h2>
    </div>
  );
};

export default extraSkills;