import React, { useState, useEffect } from "react";
import { checkHeading, replaceHeadingStarts } from "../ai-helper/helper";
const Answers = ({ ans, index, totalResult }) => {
  const [heading, setheading] = useState(false);
  const [answer, setanswer] = useState(ans);

  useEffect(() => {
    // This effect runs when the component mounts or when 'ans' changes
    console.log(checkHeading(ans));
    if (checkHeading(ans)) {
      // Check if the answer starts with a heading format
      setheading(true);
      setanswer(replaceHeadingStarts(ans)); //set the answer without the heading markers
    }
  }, []);
  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="text-2xl font-bold">{answer}:</span>
      ) : heading ? (
        <span className="text-2xl font-bold text-green-500">{answer}</span>
      ) : (
        <span className="text-lg">{answer}</span>
      )}
    </>
  );
};

export default Answers;
