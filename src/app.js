const NEG_INF = -1000000;

const createPop = (arrayOfNumbers, itemToSearch) => {
  let currIndex = NEG_INF;
  let check = false;

  const searchForElement = () => {
    arrayOfNumbers.forEach((element, index) => {
      if (element === itemToSearch) {
        currIndex = index;
        check = true;
      }
    });

    return check
      ? () => `The item is present and is at index ${currIndex}`
      : () => `The item is not present and is at index ${NEG_INF}`;
  };

  return searchForElement();
};

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
createPop(arrayOfNumbers, itemToSearch);
