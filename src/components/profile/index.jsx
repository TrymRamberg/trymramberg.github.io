import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex justify-between items-center py-4 rounded-lg mb-20">
      <div className="flex flex-col w-full flex-grow">
        <div className="text-3xl md:text-5xl font-bold">Trym Ramberg</div>
        {/* <div className="text-sm md:text-lg font-bold pt-2">
          Software Engineer Intern at Slalom
        </div> */}
        <div className="text-sm md:text-lg font-medium pr-4 pt-6 text-gray-600 dark:text-gray-400">
          Highly motivated and driven senior studying Computer Science and Business at the
          University of Michigan.
        </div>
      </div>
      <div className="flex w-32 md:w-48 justify-end">
        <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full">
          <Image
            // src="/headshot.jpeg"
            src="/trym.jpg"
            alt="Profile"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
