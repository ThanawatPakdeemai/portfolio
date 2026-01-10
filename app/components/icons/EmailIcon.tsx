import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={props.fill || "#000000"}
      width="20px"
      height="20px"
      viewBox="0 0 0.6 0.6"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M0.475 0.1a0.075 0.075 0 0 1 0.075 0.075v0.25A0.075 0.075 0 0 1 0.475 0.5h-0.35A0.075 0.075 0 0 1 0.05 0.425v-0.25A0.075 0.075 0 0 1 0.125 0.1zM0.5 0.183 0.317 0.344a0.025 0.025 0 0 1 -0.03 0.002L0.283 0.344 0.1 0.183V0.425A0.025 0.025 0 0 0 0.125 0.45h0.35A0.025 0.025 0 0 0 0.5 0.425zM0.462 0.15H0.138L0.3 0.292z"
      />
    </svg>
  );
};

export default EmailIcon;
