import { SVGProps } from "react";

const EducationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={props.fill || "#000000"}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 260 188"
      xmlSpace="preserve"
      className={props.className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M134.3,109.2L202,83.8V146c0,13.4-32.2,24.3-72,24.3S58,159.4,58,146V83.8l67.9,25.4l4.2,1.6L134.3,109.2z M130.1,98L258,50 L130.1,2L2,50l20,7.5v81.8c-4.7,2.2-8,7.1-8,12.7v34h28v-34c0-5.7-3.3-10.6-8.1-12.8V61.9L130.1,98z"></path>{" "}
      </g>
    </svg>
  );
};

export default EducationIcon;
