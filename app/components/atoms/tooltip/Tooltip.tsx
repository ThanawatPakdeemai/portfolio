import React, { useState } from "react";
import "../../../tooltip.css";

interface ITooltip {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: ITooltip) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className={`tooltip ${showTooltip ? "open" : ""}`}>
          {text}
          {/* Arrow indicator */}
          <div className="arrow" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
