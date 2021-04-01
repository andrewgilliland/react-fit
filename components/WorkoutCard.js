const WorkoutCard = ({ date, name, description }) => {
  return (
    <div className="max-w-lg font-mono border-2 border-black shadow-offset-green">
      <div className="bg-black p-3">
        <h2 className="font-bold text-white">{name}</h2>
        <div className="text-green-400 font-semibold">{date}</div>
      </div>
      <div className="p-3">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
