const service = {
  assembleParts: async ({ numOfParts, parts }) => {
    const sortArray = array => array.sort((a,b) => {
      return a - b;
    });
    const sortedArray = sortArray(parts);
    const totalPartsArray = [];

    for (let i = 0; i + 1 < numOfParts; i++) {
      const addedSum = sortedArray[0] + sortedArray[1];
      totalPartsArray.push(addedSum);
      sortedArray.splice(0, 2);
      sortedArray.unshift(addedSum);
    }

    let sum = 0;

    for (let i = 0; i < totalPartsArray.length; i++) {
      sum += totalPartsArray[i];
    }

    return sum;
  },
};

module.exports = service;
