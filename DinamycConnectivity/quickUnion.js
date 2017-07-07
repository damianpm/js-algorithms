const numbers = [0,1,2,3,4,5,6,7,8,9];
let id = [0,1,2,3,4,5,6,7,8,9];

let findRoot = i => {
  while (i !== id[i]) {
    console.log('i: ', i);
    i = id[i];
  }
  return i;
}

let connected = (p, q) => findRoot(p) === findRoot(q);

let union = (p, q) => {
  let pRoot = findRoot(p);
  let qRoot = findRoot(q);
  id[pRoot] = id[qRoot];
}

union(4,5);
connected(4,5);



// ES6 class
class QuickUnion {
  constructor(numbers) {
    this.numbers = numbers;
    this.id = numbers;
  }

  findRoot(i) {
    while (i !== this.id[i]) {
      i = this.id[i];
    }
    return i;
  }

  connected(p, q) {
    return this.findRoot(p) === this.findRoot(q);
  }

  union(p, q) {
    this.p = this.findRoot(p);
    this.q = this.findRoot(q);
    this.id[p] = this.id[q];
  }

}

let qu = new QuickUnion([0,1,2,3,4,5,6,7,8,9]);
qu.union(4,5);
qu.connected(4,5);