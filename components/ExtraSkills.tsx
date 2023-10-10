import { GrCompliance } from "react-icons/gr";

interface skills {
  name: string;
}

const extraSkills = ({ name }: skills) => {
  return (
    <div>
      <GrCompliance className="float-left mr-5" color="#e11d48" />
      <h2>{name}</h2>
    </div>
  );
};

export default extraSkills;