function shuffledArray(array: Array<string>): Array<string> {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function existSameIndexValue(
  array1: Array<string>,
  array2: Array<string>
): boolean {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }
  return false;
}

export function shuffled(
  array: Array<string>,
  selfGift: boolean = false
): Array<string> {
  while (1) {
    const tmp = shuffledArray(array.slice());
    if (!selfGift && existSameIndexValue(array, tmp)) {
      continue;
    }
    return tmp;
  }
  // eslint-disable-next-line no-unreachable
  return [];
}
