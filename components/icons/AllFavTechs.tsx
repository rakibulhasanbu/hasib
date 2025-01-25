'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
};

const AllFavTechs = () => {
  return (
    <>
      <motion.p
        className="text-base text-center lg:text-start mb-2.5 text-gray-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Favorite writing tools
      </motion.p>

      <motion.ul
        className="flex justify-center items-center flex-wrap gap-3.5 text-[#444] mx-auto"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#00A4DC]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Final Draft</title>
              <path d="M12 0L1.815 6v12L12 24l10.185-6V6L12 0zm6.75 16.5h-9v-1.5h9v1.5zm0-3h-13.5v-1.5h13.5v1.5zm0-3h-9v-1.5h9v1.5z" />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#40B4E5]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Fade In</title>
              <path d="M3 3v18h18V3H3zm15.75 15.75h-13.5v-13.5h13.5v13.5zM7.5 9h9v1.5h-9V9zm0 3h9v1.5h-9V12zm0 3h6v1.5h-6V15z" />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#FF9900]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Celtx</title>
              <path d="M12 2L2 6v12l10 4 10-4V6L12 2zm6 14.5l-6 2.4-6-2.4V7.5l6-2.4 6 2.4v9z" />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#1A73E8]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Google Docs</title>
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z M8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#000000]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Scrivener</title>
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V9h10v2z" />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#7952B3]">
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>WriterDuet</title>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13v10h4V7h-4z" />
            </svg>
          </div>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default AllFavTechs;
