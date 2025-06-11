import React, { use } from "react";

function card2({ userName }) {
  return (
    <div>
      card2
      <p className="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and
        take in some sunshine? We have a list of places to do just that.
        {userName}
      </p>
    </div>
  );
}

export default card2;
