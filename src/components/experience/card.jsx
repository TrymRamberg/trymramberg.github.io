export const ExperienceCard = ({
  jobTitle,
  company,
  timeframe,
  description,
}) => {
  const bulletpoints = description.map((bullet, id) => <li key={id}>{bullet}</li>)

  return (
    <div className="flex rounded-xl p-4 bg-gray-800/80 hover:bg-gray-700/60 transition-all ease-in-out">
      <div className="flex flex-col w-full text-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex text-2xl font-bold text-gray-200">
            {jobTitle}
          </div>
          <div className="flex text-lg font-normal">{timeframe}</div>
        </div>
        <div className="flex text-xl font-semibold pb-2">{company}</div>
        <div className="flex text-sm font-light flex-col">
            {bulletpoints}
        </div>
      </div>
    </div>
  );
};
