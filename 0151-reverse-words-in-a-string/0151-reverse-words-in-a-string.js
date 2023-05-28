/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let words = [];
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else if (word !== '') {
      words.push(word);
      word = '';
    }
  }

  if (word !== '') {
    words.push(word);
  }

  return words.reverse().join(' ');
};