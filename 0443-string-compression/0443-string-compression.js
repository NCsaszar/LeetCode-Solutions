/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0;

  for (let read = 0; read < chars.length; ) {
    let count = 0;
    let ch = chars[read];

    //count repeating chars
    let j = read;
    while (j < chars.length && chars[j] === ch) {
      count++;
      j++;
    }

    //read will now start where last consecutive character ended
    read = j;

    //write the character and its count if > 1
    chars[write] = ch;
    write++;
    if (count > 1) {
      let countStr = String(count);
      for (let k = 0; k < countStr.length; k++) {
        chars[write] = countStr[k];
        write++;
      }
    }
  }
  return write;
};
