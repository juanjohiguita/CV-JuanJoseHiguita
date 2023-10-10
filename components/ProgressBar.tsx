interface ProgressBarProps {
    percentage: number;
    name: string;
  }
  
  const progressBar = ({ percentage, name }: ProgressBarProps) => {
    const percentageStyle = {
      width: `${percentage}%`,
      backgroundColor: "#e11d48",
      height: "7px",
      borderRadius: "7px",
    };
  
    return (
      <div>
        <h2 className="float-left">{name}</h2>
        <h2 className="float-right">{percentage}%</h2>
        <br></br>
        <div className="p-0.5 rounded-full outline outline-1 outline-black">
          <div style={percentageStyle} />
        </div>
      </div>
    );
  };
  
  export default progressBar;