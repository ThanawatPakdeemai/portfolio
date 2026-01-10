import { SVGProps } from "react";

const TelephoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "none"}
      stroke={props.stroke || "#000000"}
      strokeWidth="1.8"
      strokeMiterlimit="10"
      className={props.className}
      {...props}
    >
      <rect x="5.32" y="1.5" width="13.36" height="21" rx="1.91" />
      <line x1="5.32" y1="18.68" x2="18.68" y2="18.68" />
    </svg>
  );
};

export default TelephoneIcon;
