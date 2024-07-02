class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (this.keyMap[hashedKey]) {
      for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
        if (this.keyMap[hashedKey][i][0] === key) {
          return this.keyMap[hashedKey][i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return valuesArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let item = this.keyMap[i][j][1];
          if (!valuesArr.includes(item)) {
            valuesArr.push(item);
          }
        }
      }
    }
    return valuesArr;
  }
}
