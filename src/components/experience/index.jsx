import { ExperienceCard } from "./card";

const EXPERIENCES = [
  {
    jobTitle: "Software Engineer Intern",
    company: "Slalom",
    timeframe: "June 2022 - Present",
    description:
      "Description of my role description of my role description of my role \
    description of my role description of my role description of my role \
    description of my role description of my role description of my role",
  },
  {
    jobTitle: "Web Developer",
    company: "University of Michigan, College of Engineering",
    timeframe: "Jan. 2020 - Jun. 2022",
    description:
      "Description of my role description of my role description of my role \
    description of my role description of my role description of my role \
    description of my role description of my role description of my role",
  },
];

export const Experience = () => {
  return (
    <div className="flex flex-col mb-8 gap-8">
      <div className="text-3xl md:text-4xl font-bold pb-2">Experience</div>
      {EXPERIENCES.map((job, id) => (
        <ExperienceCard key={id} {...job} />
      ))}
    </div>
  );
};
