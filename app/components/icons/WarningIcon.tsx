import { SVGProps } from "react";

const WarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "200"}
      height={props.height || "200"}
      viewBox="0 0 32 32"
      fill={props.fill || "#000000"}
      {...props}
    >
      <g fill="none" stroke={props.stroke || "#000000"}>
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M16 18v-6M6.358 27h19.284c1.516 0 2.48-1.62 1.759-2.953l-9.642-17.8c-.757-1.397-2.761-1.397-3.518 0L4.6 24.047C3.877 25.38 4.842 27 6.358 27Z"
        />
        <path
          fill={props.fill || "#000000"}
          d="M17 21.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
        />
      </g>
    </svg>
  );
};

export default WarningIcon;
