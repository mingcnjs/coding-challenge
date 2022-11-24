const lengthMap = {};

function findLongestLength(max, min, trains) {
  if (trains.length === 0) {
    return 0;
  }

  // find the index of the train that is eligible to be added
  const eligibleIndex = trains.findIndex((train) => train > max || train < min);
  if (eligibleIndex < 0) {
    return 0;
  }

  const mapKey1 = `${max}-${min}-${eligibleIndex}`;
  // look for the map first and then calculate if not exist
  const lengthWithoutAddition =
    lengthMap[mapKey1] ||
    findLongestLength(max, min, trains.slice(eligibleIndex + 1));
  // save result to avoid re-calculation in the future
  lengthMap[mapKey1] = lengthWithoutAddition;

  const newMax = Math.max(max, trains[eligibleIndex]);
  const newMin = Math.min(min, trains[eligibleIndex]);
  const mapKey2 = `${newMax}-${newMin}-${eligibleIndex}`;
  // look for the map first and then calculate if not exist
  const lengthWithAddition =
    lengthMap[mapKey2] ||
    1 + findLongestLength(newMax, newMin, trains.slice(eligibleIndex + 1));
  // save result to avoid re-calculation in the future
  lengthMap[mapKey2] = lengthWithAddition;

  return Math.max(lengthWithAddition, lengthWithoutAddition);
}

function train_sort(n, trains) {
  return findLongestLength(-1, 10000, trains);
}

console.log("[1, 2, 3] => ", train_sort(3, [1, 2, 3]));
console.log("[10, 2, 12, 20, 3] => ", train_sort(5, [10, 2, 12, 20, 3]));
