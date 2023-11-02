var MyHashSet = function () {
  this.hash = new Array(10 ** 6 + 1);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.hash[key] = 1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.hash[key] = 0;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hash[key] === 1;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
