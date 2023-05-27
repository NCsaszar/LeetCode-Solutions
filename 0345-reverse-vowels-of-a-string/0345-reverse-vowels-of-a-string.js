/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let sArray = s.split('');

  while (left < right) {
    if (vowels.has(sArray[left]) && vowels.has(sArray[right])) {
      [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
      left++;
      right--;
    } else if (vowels.has(sArray[left])) {
      right--;
    } else {
      left++;
    }
  }
  return sArray.join('');
};
