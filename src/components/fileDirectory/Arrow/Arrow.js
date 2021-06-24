import React from 'react';
// constants
import { sortOrder } from 'constants/sortType';
const Arrow = ({ order, sort, code = null }) => {
  return (
    <div className="arrows">
      <span
        className={`${
          order === sortOrder.ascending && sort === code
            ? `${code} arrow-ascend`
            : ''
        }`}
      >
        &#129169;
      </span>
      <span
        className={`${
          order === sortOrder.descending && sort === code
            ? `${code} arrow-descend`
            : ''
        }`}
      >
        &#129171;
      </span>
    </div>
  );
};

export default Arrow;
