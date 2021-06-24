import React from 'react';
// constants
import { sortOrder } from 'constants/sortType';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faSortUp} size="xs" />
      </span>
      <span
        className={`${
          order === sortOrder.descending && sort === code
            ? `${code} arrow-descend`
            : ''
        }`}
      >
        <FontAwesomeIcon icon={faSortDown} size="xs" />
      </span>
    </div>
  );
};

export default Arrow;
