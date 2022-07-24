export const ExperienceCard = ({
  jobTitle,
  company,
  timeframe,
  description,
}) => {
  return (
    <div className="flex rounded-xl p-4 bg-gray-800/80 hover:bg-gray-700/60">
      <div className="flex flex-col w-full text-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex text-2xl font-bold text-gray-200">
            {jobTitle}
          </div>
          <div className="flex text-lg font-normal">{timeframe}</div>
        </div>
        <div className="flex text-xl font-semibold pb-2">{company}</div>
        <div className="flex text-xl font-light">{description}</div>
      </div>
    </div>
  );
};
