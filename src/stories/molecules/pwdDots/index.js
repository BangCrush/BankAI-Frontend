import { useState } from "react";
import PwdDot from "stories/atoms/pwdDot";

const PwdDots = ({ input }) => {
  let dot_length = [0, 0, 0, 0];
  return (
    <div className="flex gap-50 ml-auto mr-auto">
      {dot_length.map((_, index) => (
        <PwdDot key={index} hasValue={input.length > index} />
      ))}
    </div>
  );
};

export default PwdDots;
