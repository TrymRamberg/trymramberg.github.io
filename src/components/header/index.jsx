import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex space-x-4">
        <Link href="/">
          <a className="font-semibold text-gray-800 dark:text-gray-200 md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="font-normal text-gray-600 dark:text-gray-400 md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            About
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="font-normal text-gray-600 dark:text-gray-400 md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            Portfolio
          </a>
        </Link>
        <Link href="/blog">
          <a className="font-normal text-gray-600 dark:text-gray-400 md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            Blog
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/resume.pdf">
          <a
            className="text-gray-400 hover:text-gray-200 bg-gray-700 flex justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            title="Resume"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/trym-ramberg/">
          <a
            className="text-gray-400 hover:text-gray-200 bg-gray-700 flex justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            title="LinkedIn"
            target="_blank"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </Link>
        <Link href="https://github.com/TrymRamberg">
          <a
            className="text-gray-400 hover:text-gray-200 bg-gray-700 flex justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            title="GitHub"
            target="_blank"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
