import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex justify-center items-center' key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain rounded-full'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
