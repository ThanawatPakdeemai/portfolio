import { SVGProps } from "react";

const SendIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "200"}
      height={props.height || "200"}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"
      />
    </svg>
  );
};

export default SendIcon;
