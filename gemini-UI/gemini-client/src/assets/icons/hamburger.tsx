import { SVGAttributes } from "react";

const IconHamburger = ({ className = "" }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 7L4 7"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 17L4 17"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconHamburger;
