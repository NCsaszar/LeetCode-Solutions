/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0, read = 0; // initialize pointers

    while (read < chars.length) {
        let ch = chars[read];
        let count = 0;

        // Count consecutive repeating characters
        while (read < chars.length && chars[read] === ch) {
            read++;
            count++;
        }

        // Write character and its count if > 1
        chars[write++] = ch;
        if (count > 1) {
            for (let c of String(count)) {
                chars[write++] = c;
            }
        }
    }
    
    return write;
};

