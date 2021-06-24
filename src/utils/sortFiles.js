import { sortOrder, sortType } from 'constants/sortType';

export const sortFiles = (files, type, order) => {
  const array = [...files];
  let resultObject = {};
  // if order is a falsy value (on initial render it is) or ascending, do the opposite order based on type
  if (!order || order === sortOrder.ascending) {
    switch (type) {
      case sortType.date:
        array.sort(
          (file1, file2) =>
            file2.createdAt.getTime() - file1.createdAt.getTime()
        );
        break;
      case sortType.name:
        array.sort((file1, file2) => file2.name.localeCompare(file1.name));
        break;
      default:
        break;
    }
    resultObject = {
      order: sortOrder.descending,
      sort: type,
      files: [...array],
    };
    return resultObject;
  } else {
    // then it's a descending order, do the ascending
    switch (type) {
      case sortType.date:
        array.sort(
          (file1, file2) =>
            file1.createdAt.getTime() - file2.createdAt.getTime()
        );
        break;
      case sortType.name:
        array.sort((file1, file2) => file1.name.localeCompare(file2.name));
        break;
      default:
        break;
    }
    resultObject = {
      order: sortOrder.ascending,
      sort: type,
      files: [...array],
    };
    return resultObject;
  }
};
