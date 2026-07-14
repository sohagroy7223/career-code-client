import React from "react";

import { motion } from "framer-motion";

const Company = ({ companies }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={{ x: ["0%", "-20%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...companies, ...companies].map((company, index) => (
          <img
            key={index}
            src={company.company_log}
            alt="company logo"
            className="w-20  h-17 rounded-md object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Company;
