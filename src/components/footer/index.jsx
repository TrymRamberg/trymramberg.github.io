import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex justify-between items-start space-x-4 pt-4 border-t border-gray-800/20">
      <div className="flex flex-col gap-2">
        <Link href="/">
          <a className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1">
            About
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/portfolio">
          <a className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1">
            Portfolio
          </a>
        </Link>
        <Link href="/Blog">
          <a className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1">
            Blog
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="https://www.linkedin.com/in/trym-ramberg/">
          <a
            className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1"
            target="_blank"
          >
            LinkedIn
          </a>
        </Link>
        <Link href="https://github.com/TrymRamberg">
          <a
            className="font-normal text-gray-600 hover:text-gray-400 dark:text-gray-500 md:inline-block p-1"
            target="_blank"
          >
            GitHub
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2"></div>
      <div className="flex flex-col gap-2"></div>
    </div>
  );
};
