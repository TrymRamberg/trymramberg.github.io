import { ExperienceCard } from "./card";

const EXPERIENCES = [
  {
    jobTitle: "Software Engineer Intern",
    company: "Slalom",
    timeframe: "June 2022 - Aug. 2022",
    description: [
        "Developed a performant and scalable full-stack web application for a client using Next.js and Vercel",
        "Performed extensive Testing of website, including Unit Testing, Snapshot Testing, End-To-End Testing, mocking of API calls, etc. using Jest, Enzyme, and React Testing Library",
        "Led multiple demos with our clients in order to continuously get feedback on our progress and to approach our work in an Agile way",
        "Worked effectively with larger team of other Engineers, Designers, and a Scrum Master to deliver a high quality end product to our clients",
    ]
  },
  {
    jobTitle: "Web Developer",
    company: "University of Michigan, College of Engineering",
    timeframe: "Jan. 2020 - June 2022",
    description: [
        "Managed and developed website from scratch for one of the programs offered by the University of Michigan (Multidisciplinary Design Program)",
        "Scaled website to attract more than 25,000+ independent users since our initial launch in 2020",
        "Collaborated closely with faculty to create a portfolio to showcase over 25+ projects available to students, in\
        collaboration with various companies (such as JPMorgan, Subaru, Caterpillar, Whirlpool, etc.)",
    ]
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
