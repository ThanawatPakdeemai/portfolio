import dynamic from "next/dynamic";
import React from "react";

const WarningIcon = dynamic(() => import("@/icons/WarningIcon"));

interface IMessageState {
  message: string;
  type: "warning" | "error" | "info" | "message";
  className?: string;
}

const MessageState = (props: IMessageState, { className = "" }) => {
  const logicCase = () => {
    switch (props.type) {
      case "warning":
        return <WarningIcon width={18} height={18} stroke="#efc576" />;
      case "error":
        return <h1>Good Afternoon!</h1>;
      case "info":
        return <h1>Good Evening!</h1>;
      default:
        return <h1>Hello!</h1>;
    }
  };
  return (
    <>
      <p
        className={`text-yellow-primary -mt-4 mb-2 flex items-center gap-1.5 ${className}`}
      >
        {logicCase()}
        {props.message}
      </p>
    </>
  );
};

export default MessageState;
