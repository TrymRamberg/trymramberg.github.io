import Link from "next/link";

export const IconWrapper = ({ titleHover = "", iconLink = "/" }) => {
  return (
    <>
      <Link href={iconLink}>
        <a
          className="text-gray-400 hover:text-gray-200 bg-gray-700 flex justify-center items-center w-8 h-8 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
          title={titleHover}
        ></a>
      </Link>
    </>
  );
};
